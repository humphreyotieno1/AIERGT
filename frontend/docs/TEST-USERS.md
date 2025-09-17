# 🧪 Test Users Documentation

This document contains comprehensive information about the dummy users system for testing the AIERGT website authentication and role-based features.

## 🔐 **Working Test Credentials**

### 👑 **Admin Users**

#### Primary Admin
- **Email**: `admin@aiergt.africa`
- **Password**: `admin123`
- **Name**: Test Admin
- **Role**: `admin`
- **Organization**: AIERGT
- **Phone**: +254 700 123 456
- **Features**: Full admin dashboard access, user management, system settings

#### Super Admin
- **Email**: `superadmin@aiergt.africa`
- **Password**: `superadmin123`
- **Name**: Test Super Admin
- **Role**: `admin`
- **Organization**: AIERGT
- **Phone**: +254 700 555 123
- **Features**: Full admin dashboard access, user management, system settings

### 👨‍💼 **Professional Users**

#### African Consultant
- **Email**: `consultant@aiergt.africa`
- **Password**: `consultant123`
- **Name**: Test Consultant
- **Role**: `africanConsultant`
- **Organization**: Environmental Solutions Ltd
- **Phone**: +234 800 123 456
- **Features**: Member portal access, consultancy resources

#### Partner Organization
- **Email**: `partner@aiergt.africa`
- **Password**: `partner123`
- **Name**: Test Partner
- **Role**: `partner`
- **Organization**: African Environmental Institute
- **Phone**: +27 11 123 456
- **Features**: Partner portal access, collaboration tools

#### Expatriate Consultant
- **Email**: `expat@aiergt.africa`
- **Password**: `expat123`
- **Name**: Test Expatriate
- **Role**: `expatriateConsultant`
- **Organization**: Global Environmental Consultants
- **Phone**: +1 555 123 456
- **Features**: International consultant resources

### 🎓 **Student User**

#### Student
- **Email**: `student@aiergt.africa`
- **Password**: `student123`
- **Name**: Test Student
- **Role**: `student`
- **Organization**: University of Nairobi
- **Phone**: +254 700 987 654
- **Features**: Training portal access, course materials

## 🔧 **Technical Implementation**

### Password Security
- **Hashing Algorithm**: bcrypt with 12 salt rounds
- **Hash Format**: `$2a$12$...` (bcrypt v2a with 12 rounds)
- **Security Level**: High (12 rounds = ~2^12 iterations)

### User Data Structure
```typescript
interface DummyUser {
  id: string
  email: string
  password: string  // bcrypt hashed
  name: string
  phone?: string
  organization?: string
  role: 'africanConsultant' | 'partner' | 'expatriateConsultant' | 'student' | 'admin'
  isVerified: boolean
  createdAt: Date
  updatedAt: Date
}
```

### Authentication Flow
1. User enters credentials on `/auth/login`
2. NextAuth calls `authorize` function
3. System finds user by email in `dummyUsers` array
4. Password verified using `bcrypt.compare()`
5. User session created with role information
6. Role-based features enabled/disabled based on `session.user.role`

## 🧪 **Testing Scenarios**

### Admin Features Testing
1. **Login as Admin**:
   - Go to `/auth/login`
   - Enter `admin@aiergt.africa` / `admin123`
   - Click "Sign in"
   - Verify successful login

2. **Admin Dashboard Access**:
   - After login, click profile dropdown
   - Verify "Admin Dashboard" option appears with golden styling
   - Click "Admin Dashboard" to access admin features
   - Test admin-only functionality

3. **Role-Based Navigation**:
   - Login with different user types
   - Verify profile dropdown shows correct options
   - Test that admin features are hidden for non-admin users

### User Role Testing
1. **Different User Types**:
   - Test login with each user type (admin, consultant, partner, expat, student)
   - Verify role-specific features are shown/hidden appropriately
   - Check profile information displays correctly

2. **Profile Dropdown Testing**:
   - Login with admin user → should see "Admin Dashboard"
   - Login with regular user → should see standard options only
   - Test mobile navigation with different user types

### Authentication Form Testing
1. **Login Form** (`/auth/login`):
   - Test email/password fields
   - Test eye icon for password visibility
   - Test "Forgot password" link
   - Test "Register here" link
   - Test portal type selection

2. **Register Form** (`/auth/register`):
   - Test all form fields
   - Test eye icons on both password fields
   - Test user type selection
   - Test form validation

3. **Password Reset** (`/auth/reset-password`):
   - Test password visibility toggles
   - Test password strength validation
   - Test password confirmation matching

## 📱 **Mobile Testing**

### Responsive Design
- Test login form on mobile devices
- Test profile dropdown on mobile
- Test eye icons on mobile
- Test admin features on mobile

### Mobile Navigation
- Test mobile menu with different user types
- Verify admin options appear correctly on mobile
- Test touch interactions with eye icons

## 🔄 **Development Workflow**

### Adding New Test Users
1. Edit `/frontend/lib/data/dummyUsers.ts`
2. Add new user object to `dummyUsers` array
3. Generate bcrypt hash for password:
   ```bash
   node -e "const bcrypt = require('bcryptjs'); console.log(bcrypt.hashSync('newpassword', 12));"
   ```
4. Update `testCredentials` object
5. Test the new user login

### Updating Passwords
1. Generate new bcrypt hash for the password
2. Update the password field in `dummyUsers` array
3. Update the corresponding entry in `testCredentials`
4. Test the updated credentials

### Debugging Authentication Issues
1. Check browser console for authentication errors
2. Check server logs for NextAuth errors
3. Verify password hashes are correct
4. Test password verification manually:
   ```bash
   node -e "const bcrypt = require('bcryptjs'); console.log(bcrypt.compareSync('password', 'hash'));"
   ```

## 🚀 **Quick Test Commands**

### Test Admin Login
```bash
# Login with admin credentials
Email: admin@aiergt.africa
Password: admin123
```

### Test Regular User Login
```bash
# Login with consultant credentials
Email: consultant@aiergt.africa
Password: consultant123
```

### Test Student Login
```bash
# Login with student credentials
Email: student@aiergt.africa
Password: student123
```

## 📋 **Testing Checklist**

### Authentication
- [ ] Admin login works with `admin@aiergt.africa` / `admin123`
- [ ] Super admin login works with `superadmin@aiergt.africa` / `superadmin123`
- [ ] Consultant login works with `consultant@aiergt.africa` / `consultant123`
- [ ] Partner login works with `partner@aiergt.africa` / `partner123`
- [ ] Expatriate login works with `expat@aiergt.africa` / `expat123`
- [ ] Student login works with `student@aiergt.africa` / `student123`

### Admin Features
- [ ] Admin users see "Admin Dashboard" in profile dropdown
- [ ] Non-admin users don't see admin options
- [ ] Admin dashboard access works
- [ ] Role-based navigation works correctly

### UI Features
- [ ] Eye icons work on all password fields
- [ ] Password visibility toggle functions correctly
- [ ] Mobile navigation works with all user types
- [ ] Profile dropdown displays correct options

### Security
- [ ] Passwords are properly hashed with bcrypt
- [ ] Password verification works correctly
- [ ] Session management includes role information
- [ ] Role-based access control functions properly

## ⚠️ **Security Notice**

**These credentials are for development/testing only!**

- Never use these credentials in production
- Change all passwords before deploying to production
- Implement proper user management system for production
- Use secure password policies in production
- Consider implementing additional security measures like 2FA

## 📁 **File Locations**

- **Dummy Users Data**: `/frontend/lib/data/dummyUsers.ts`
- **NextAuth Configuration**: `/frontend/app/api/auth/[...nextauth]/route.ts`
- **Auth Types**: `/frontend/types/auth.types.ts`
- **Login Page**: `/frontend/app/auth/login/page.tsx`
- **Register Page**: `/frontend/app/auth/register/page.tsx`
- **Reset Password Page**: `/frontend/app/auth/reset-password/page.tsx`
- **Header Component**: `/frontend/components/layout/Header.tsx`

---

**Happy Testing!** 🎉

For any issues or questions about the test user system, refer to this documentation or check the implementation files listed above.
