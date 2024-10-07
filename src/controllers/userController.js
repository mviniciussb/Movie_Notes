const knex = require("../database/knex/index");
const { hash, compare } = require("bcryptjs");

class UserController {
  async create(request, response) {
    const { name, email, password } = request.body;

    const checkUserExists = await knex("users").where({ email }).first();

    if (checkUserExists) {
      return response
        .status(400)
        .json({ Error: "Esse e-mail já está em uso." });
    }

    const hashedPassword = await hash(password, 8);

    await knex("users").insert({
      name,
      email,
      password: hashedPassword,
    });

    return response
      .status(201)
      .json({ message: "Usuário criado com sucesso!" });
  }

  async update(request, response) {
    const { name, email, password, oldPassword } = request.body;
    const { id } = request.params;

    const user = await knex("users").where({ id }).first();

    if (!user) {
      return response.status(400).json({ Error: "Usuário não encontrado." });
    }

    const checkEmailxists = await knex("users").where({ email }).first();

    if (checkEmailxists && checkEmailxists.id !== id) {
      return response
        .status(400)
        .json({ error: "E-mail já utilizado por outro usuário." });
    }

    user.name = name || user.name;
    user.email = email || user.email;

    if (password && !oldPassword) {
      return response.status(400).json({
        error:
          "A senha antiga deve ser fornecida para que as alterações sejam feitas.",
      });
    }

    if (password && oldPassword) {
      const checkOldPassword = await compare(oldPassword, user.password);

      if (!checkOldPassword) {
        return response.status(400).json({ error: "As senhas não coincidem." });
      }

      user.password = await hash(password, 8);
    }

    await knex("users").where({ id }).update({
      name: user.name,
      email: user.email,
      password: user.password,
      updated_at: knex.fn.now(),
    });

    return response
      .status(200)
      .json({ message: "Usuário atualizado com sucesso!" });
  }
}

module.exports = UserController;
