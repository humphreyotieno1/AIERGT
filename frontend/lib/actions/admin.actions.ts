'use server'

import { verifyUser, rejectUser } from './auth.actions'

export async function handleVerifyUser(userId: string) {
  await verifyUser(userId)
}

export async function handleRejectUser(userId: string) {
  await rejectUser(userId)
}
