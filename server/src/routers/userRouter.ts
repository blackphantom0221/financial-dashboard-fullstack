import { Router } from 'express'
import passport from 'passport'

import {
  createUser,
  findUsers,
  findUserById,
  updateUser,
  deleteUser,
  loginUser,
  findUserByUserName,
  addInvestmentToUser,
  addIncomeToUser,
  addExpenseToUser,
} from '../controllers/userController'

const router = Router()

router.get('/', findUsers)
router.post('/', createUser)
router.get(
  '/:userId',
  passport.authenticate('jwt', { session: false }),
  findUserById
)
router.get(
  '/:username',
  passport.authenticate('jwt', { session: false }),
  findUserByUserName
)
router.put(
  '/:userId',
  passport.authenticate('jwt', { session: false }),
  updateUser
)
router.delete(
  '/:userId',
  passport.authenticate('jwt', { session: false }),
  deleteUser
)

router.patch('/addInvestment/:userId/:investmentId', addInvestmentToUser)
router.patch('/addIncome/:userId/:incomeId', addIncomeToUser)
router.patch('/addExpense/:userId/:expenseId', addExpenseToUser)

export default router
