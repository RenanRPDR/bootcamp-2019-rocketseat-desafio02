import Students from '../models/Students';

class StudentsController {
  async index(req, res) {
    const students = await Students.findAll();

    return res.json(students);
  }

  async store(req, res) {
    const studentExists = await Students.findOne({
      where: { email: req.body.email },
    });

    if (studentExists) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const { id, nome, email, idade, peso, altura } = await Students.create(
      req.body
    );

    return res.json({
      id,
      nome,
      email,
      idade,
      peso,
      altura,
    });
  }

  async update(req, res) {
    return res.json({ ok: true });
  }
}

export default new StudentsController();
