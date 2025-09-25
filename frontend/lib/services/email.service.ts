import nodemailer from 'nodemailer'

// Email configuration
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export interface EmailTemplate {
  subject: string
  html: string
}

export class EmailService {
  static async sendEmail(to: string, template: EmailTemplate): Promise<boolean> {
    try {
      await transporter.sendMail({
        from: process.env.SMTP_FROM,
        to,
        subject: template.subject,
        html: template.html,
      })
      return true
    } catch (error) {
      console.error('Failed to send email:', error)
      return false
    }
  }

  static async sendAdminVerificationEmail(user: any): Promise<boolean> {
    const adminEmails = await this.getAdminEmails()
    const adminEmailList = adminEmails.join(', ')

    const template: EmailTemplate = {
      subject: 'New User Registration - Verification Required',
      html: `
        <h2>New User Registration</h2>
        <p>A new user has registered and requires verification:</p>
        <ul>
          <li><strong>Name:</strong> ${user.name}</li>
          <li><strong>Email:</strong> ${user.email}</li>
          <li><strong>Role:</strong> ${user.role}</li>
          <li><strong>Organization:</strong> ${user.organization || 'Not provided'}</li>
          <li><strong>Phone:</strong> ${user.phone || 'Not provided'}</li>
        </ul>
        <p>Please verify this user in the admin panel: <a href="${process.env.NEXTAUTH_URL}/admin/users">Admin Panel</a></p>
      `
    }

    return this.sendEmail(adminEmailList, template)
  }

  static async sendWelcomeEmail(user: any): Promise<boolean> {
    const template: EmailTemplate = {
      subject: 'Welcome to AIERGT',
      html: `
        <h2>Welcome to AIERGT!</h2>
        <p>Dear ${user.name},</p>
        <p>Thank you for registering with the African Institute for Environmental Research and Geospatial Technology.</p>
        <p>Your registration is pending admin verification. You will receive an email once your account has been verified.</p>
        <p>In the meantime, you can explore our website and learn more about our services.</p>
        <p>Best regards,<br>The AIERGT Team</p>
      `
    }

    return this.sendEmail(user.email, template)
  }

  static async sendUserVerificationEmail(user: any): Promise<boolean> {
    const template: EmailTemplate = {
      subject: 'Account Verified - AIERGT',
      html: `
        <h2>Account Verified!</h2>
        <p>Dear ${user.name},</p>
        <p>Great news! Your AIERGT account has been verified by our admin team.</p>
        <p>You can now access all features of the platform:</p>
        <ul>
          <li>Training Portal</li>
          <li>Geoportal</li>
          <li>Community Features</li>
          <li>Research Resources</li>
        </ul>
        <p><a href="${process.env.NEXTAUTH_URL}/dashboard" style="background: #87ceeb; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Access Your Dashboard</a></p>
        <p>Best regards,<br>The AIERGT Team</p>
      `
    }

    return this.sendEmail(user.email, template)
  }

  static async sendUserRejectionEmail(user: any): Promise<boolean> {
    const template: EmailTemplate = {
      subject: 'Account Registration - AIERGT',
      html: `
        <h2>Registration Update</h2>
        <p>Dear ${user.name},</p>
        <p>Thank you for your interest in joining AIERGT.</p>
        <p>After review, we are unable to approve your registration at this time. If you believe this is an error or would like to discuss your application further, please contact our support team.</p>
        <p>Contact: <a href="mailto:${process.env.SUPPORT_EMAIL}">${process.env.SUPPORT_EMAIL}</a></p>
        <p>Best regards,<br>The AIERGT Team</p>
      `
    }

    return this.sendEmail(user.email, template)
  }

  static async sendPasswordChangeEmail(user: any): Promise<boolean> {
    const template: EmailTemplate = {
      subject: 'Password Changed - AIERGT',
      html: `
        <h2>Password Changed</h2>
        <p>Dear ${user.name},</p>
        <p>Your password has been successfully changed.</p>
        <p>If you did not make this change, please contact our support team immediately.</p>
        <p>Contact: <a href="mailto:${process.env.SUPPORT_EMAIL}">${process.env.SUPPORT_EMAIL}</a></p>
        <p>Best regards,<br>The AIERGT Team</p>
      `
    }

    return this.sendEmail(user.email, template)
  }

  static async sendPasswordResetEmail(user: any, resetUrl: string): Promise<boolean> {
    const template: EmailTemplate = {
      subject: 'Password Reset - AIERGT',
      html: `
        <h2>Password Reset Request</h2>
        <p>Dear ${user.name},</p>
        <p>We received a request to reset your password for your AIERGT account.</p>
        <p>Click the button below to reset your password:</p>
        <p><a href="${resetUrl}" style="background: #87ceeb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block;">Reset Password</a></p>
        <p>Or copy and paste this link into your browser:</p>
        <p><a href="${resetUrl}">${resetUrl}</a></p>
        <p><strong>This link will expire in 1 hour.</strong></p>
        <p>If you did not request a password reset, please ignore this email. Your password will remain unchanged.</p>
        <p>For security reasons, please do not share this link with anyone.</p>
        <p>Best regards,<br>The AIERGT Team</p>
      `
    }

    return this.sendEmail(user.email, template)
  }

  private static async getAdminEmails(): Promise<string[]> {
    const { prisma } = await import('@/lib/prisma')
    const admins = await prisma.user.findMany({
      where: { role: 'ADMIN' },
      select: { email: true }
    })
    return admins.map(admin => admin.email)
  }
}
