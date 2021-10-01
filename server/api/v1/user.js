const router = require("express").Router();
const createUserController = require("./../../controller/user");

router.get("/", async (req, res, next) => {
  try {
    const getUsers = await createUserController.getUsers();
    res.status(200).json(getUsers);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(id);
    const getUser = await createUserController.getUser(id);
    res.status(200).json(getUser);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { name, gender, salary, dateofbirth } = req.body;
    const saveUser = await createUserController.addUser(
      name,
      gender,
      salary,
      dateofbirth
    );
    res.status(200).json(saveUser);
  } catch (err) {
    next(err);
  }
});

router.put("/", async (req, res, next) => {
  try {
    const { id, name, gender, salary, dateofbirth } = req.body;

    const update = await createUserController.updateUser(
      id,
      salary,
      name,
      gender,
      dateofbirth
    );
    res.status(200).json(update);
  } catch (err) {
    next(err);
  }
});

router.delete("/", async (req, res, next) => {
  try {
    const { id } = req.body;
    const deleteUser = await createUserController.delete(id);
    res.status(200).json(deleteUser);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
