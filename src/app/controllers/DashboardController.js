const moment = require('moment-timezone')
const { Op } = require('sequelize')
const { User, Appointment } = require('../models')

class DashboardController {
  async index (req, res) {
    const { id: userId, provider: isProvider } = req.session.user
    if (isProvider) {
      const appointments = await Appointment.findAll({
        where: {
          provider_id: userId,
          date: {
            [Op.between]: [
              moment()
                .startOf('day')
                .format(),
              moment()
                .endOf('day')
                .format()
            ]
          }
        },
        include: [{ model: User, as: 'user' }],
        order: ['date']
      })
      return res.render('providerboard', { appointments })
    } else {
      const providers = await User.findAll({
        where: { provider: true }
      })
      return res.render('dashboard', { providers })
    }
  }
}

module.exports = new DashboardController()
