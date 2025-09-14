# 🧪 Test Credentials for AIERGT Website

This document contains dummy user credentials for testing different user roles and features on the AIERGT website.

## 🔐 Available Test Accounts

### 👑 Admin Users

#### Primary Admin
- **Email**: `admin@aiergt.africa`
- **Password**: `admin123`
- **Name**: Dr. Sarah Mwangi
- **Role**: Admin
- **Features**: Full admin dashboard access, user management, system settings

#### Super Admin
- **Email**: `superadmin@aiergt.africa`
- **Password**: `superadmin123`
- **Name**: Prof. Ahmed Hassan
- **Role**: Admin
- **Features**: Full admin dashboard access, user management, system settings

### 👨‍💼 Professional Users

#### African Consultant
- **Email**: `consultant@aiergt.africa`
- **Password**: `consultant123`
- **Name**: John Okonkwo
- **Role**: African Consultant
- **Organization**: Environmental Solutions Ltd
- **Features**: Member portal access, consultancy resources

#### Partner Organization
- **Email**: `partner@aiergt.africa`
- **Password**: `partner123`
- **Name**: Maria Santos
- **Role**: Partner
- **Organization**: African Environmental Institute
- **Features**: Partner portal access, collaboration tools

#### Expatriate Consultant
- **Email**: `expat@aiergt.africa`
- **Password**: `expat123`
- **Name**: Dr. Michael Johnson
- **Role**: Expatriate Consultant
- **Organization**: Global Environmental Consultants
- **Features**: International consultant resources

### 🎓 Student User

#### Student
- **Email**: `student@aiergt.africa`
- **Password**: `student123`
- **Name**: Aisha Hassan
- **Role**: Student
- **Organization**: University of Nairobi
- **Features**: Training portal access, course materials

## 🧪 Testing Scenarios

### Admin Features Testing
1. **Login as Admin**:
   - Use `admin@aiergt.africa` / `admin123`
   - Verify admin dashboard appears in profile dropdown
   - Test admin-only features and permissions

2. **Admin Dashboard Access**:
   - Click on "Admin Dashboard" in profile dropdown
   - Verify access to admin-only sections
   - Test user management features

### User Role Testing
1. **Different User Types**:
   - Test login with each user type
   - Verify role-specific features are shown/hidden
   - Check profile information displays correctly

2. **Profile Dropdown Testing**:
   - Login with different users
   - Verify profile dropdown shows correct options
   - Test role-based navigation

### Mobile Testing
1. **Mobile Navigation**:
   - Test profile dropdown on mobile devices
   - Verify admin features work on mobile
   - Check responsive design

## 🔧 Development Notes

### Password Security
- All passwords are hashed using bcrypt with salt rounds of 12
- Original passwords are simple for testing purposes
- In production, implement proper password policies

### User Data
- All users are marked as verified (`isVerified: true`)
- Phone numbers and organizations are included for testing
- Created dates are set for realistic testing scenarios

### Role-Based Access
- Admin users see "Admin Dashboard" option
- Regular users see standard profile and dashboard options
- Role checking is done via `session.user?.role === 'admin'`

## 🚀 Quick Test Commands

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

## 📱 Testing Checklist

- [ ] Admin login shows admin dashboard option
- [ ] Regular user login shows standard options
- [ ] Profile dropdown works on desktop
- [ ] Profile dropdown works on mobile
- [ ] Logout functionality works
- [ ] Role-based navigation works
- [ ] User information displays correctly
- [ ] All user types can login successfully

## 🔄 Adding New Test Users

To add new test users, edit `/frontend/lib/data/dummyUsers.ts`:

1. Add new user object to `dummyUsers` array
2. Hash the password using bcrypt
3. Update `testCredentials` object
4. Test the new user login

## ⚠️ Security Notice

**These credentials are for development/testing only!**

- Never use these credentials in production
- Change all passwords before deploying to production
- Implement proper user management system for production
- Use secure password policies in production

---

**Happy Testing!** 🎉
