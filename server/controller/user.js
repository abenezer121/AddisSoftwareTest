const user = require("./../model/user");
const errorHandler = require("./../util/error");

module.exports = {
  async addUser(name, gender, salary, dateofbirth) {
    try {
      const newUser = new user({
        Name: name,
        Salary: salary,
        Gender: gender,
        birthDate: dateofbirth,
      });

      const _save = await newUser.save();
      return _save;
    } catch (err) {
      throw new errorHandler.SavingDataError(err, 407);
    }
  },

  async getUsers() {
    try {
      const _find = await user.find({});
      return _find;
    } catch (err) {
      throw new errorHandler.ResourceNotFound(err, 405);
    }
  },

  async getUser(id) {
    try {
      const _find = await user.find({ _id: id });
      return _find;
    } catch (err) {
      throw new errorHandler.ResourceNotFound(err, 405);
    }
  },
  async delete(id) {
    try {
      const _delete = await user.deleteOne({ _id: id });
      return _delete;
    } catch (err) {
      throw new errorHandler.RemoveFailed(err, 409);
    }
  },

  async updateUser(id, salary, name, gender, dateofbirth) {
    var objForUpdate = {};

    if (name) objForUpdate.Name = name;
    if (salary) objForUpdate.Salary = salary;
    if (gender) objForUpdate.Gender = gender;
    if (dateofbirth) objForUpdate.birthDate = dateofbirth;
    console.log(id);
    objForUpdate = { $set: objForUpdate };
    console.log(objForUpdate);
    try {
      const _save = await user.update({ _id: id }, objForUpdate);
      return _save;
    } catch (err) {
      throw new errorHandler.SavingDataError(err, 406);
    }
  },
};
