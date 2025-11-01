'use server'

import { verifyUser, rejectUser, activateUser, deactivateUser } from './auth.actions'

export async function handleVerifyUser(userId: string) {
  await verifyUser(userId)
}

export async function handleRejectUser(userId: string) {
  await rejectUser(userId)
}

export async function handleActivateUser(userId: string) {
  await activateUser(userId)
}

export async function handleDeactivateUser(userId: string) {
  await deactivateUser(userId)
}
