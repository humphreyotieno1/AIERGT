-- CreateEnum
CREATE TYPE "public"."UserRole" AS ENUM ('ADMIN', 'AFRICAN_CONSULTANT', 'PARTNER', 'EXPATRIATE_CONSULTANT', 'STUDENT');

-- CreateEnum
CREATE TYPE "public"."CourseLevel" AS ENUM ('BEGINNER', 'INTERMEDIATE', 'ADVANCED');

-- CreateEnum
CREATE TYPE "public"."EnrollmentStatus" AS ENUM ('ACTIVE', 'COMPLETED', 'SUSPENDED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "public"."RegistrationStatus" AS ENUM ('CONFIRMED', 'CANCELLED', 'WAITLIST');

-- CreateEnum
CREATE TYPE "public"."ProjectStatus" AS ENUM ('PLANNING', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED', 'ON_HOLD');

-- CreateEnum
CREATE TYPE "public"."NotificationType" AS ENUM ('COURSE_ENROLLMENT', 'COURSE_COMPLETION', 'CERTIFICATE_ISSUED', 'EVENT_REGISTRATION', 'EVENT_REMINDER', 'BLOG_POST', 'PROJECT_UPDATE', 'SYSTEM_ANNOUNCEMENT');

-- CreateEnum
CREATE TYPE "public"."ConfigType" AS ENUM ('STRING', 'NUMBER', 'BOOLEAN', 'JSON');

-- CreateTable
CREATE TABLE "public"."users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT,
    "phone" TEXT,
    "organization" TEXT,
    "role" "public"."UserRole" NOT NULL DEFAULT 'STUDENT',
    "isVerified" BOOLEAN NOT NULL DEFAULT false,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "emailVerified" TIMESTAMP(3),
    "passwordResetToken" TEXT,
    "passwordResetExpires" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."accounts" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."sessions" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."user_profiles" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "bio" TEXT,
    "avatar" TEXT,
    "location" TEXT,
    "website" TEXT,
    "linkedin" TEXT,
    "twitter" TEXT,
    "github" TEXT,
    "language" TEXT NOT NULL DEFAULT 'en',
    "timezone" TEXT NOT NULL DEFAULT 'UTC',
    "theme" TEXT NOT NULL DEFAULT 'light',
    "emailNotifications" BOOLEAN NOT NULL DEFAULT true,
    "pushNotifications" BOOLEAN NOT NULL DEFAULT false,
    "smsNotifications" BOOLEAN NOT NULL DEFAULT false,
    "courseUpdates" BOOLEAN NOT NULL DEFAULT true,
    "eventReminders" BOOLEAN NOT NULL DEFAULT true,
    "newsletter" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_profiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."courses" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "thumbnail" TEXT,
    "duration" INTEGER NOT NULL,
    "level" "public"."CourseLevel" NOT NULL,
    "category" TEXT NOT NULL,
    "tags" TEXT[],
    "isPublished" BOOLEAN NOT NULL DEFAULT false,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "price" DECIMAL(10,2),
    "instructorId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "courses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."course_modules" (
    "id" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "order" INTEGER NOT NULL,
    "duration" INTEGER NOT NULL,
    "videoUrl" TEXT,
    "content" TEXT,
    "isPublished" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "course_modules_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."course_enrollments" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,
    "enrolledAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completedAt" TIMESTAMP(3),
    "progress" DECIMAL(5,2) NOT NULL DEFAULT 0,
    "status" "public"."EnrollmentStatus" NOT NULL DEFAULT 'ACTIVE',

    CONSTRAINT "course_enrollments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."course_progress" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "moduleId" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "completedAt" TIMESTAMP(3),
    "timeSpent" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "course_progress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."course_materials" (
    "id" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "fileUrl" TEXT NOT NULL,
    "fileType" TEXT NOT NULL,
    "fileSize" INTEGER NOT NULL,
    "order" INTEGER NOT NULL,
    "isRequired" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "course_materials_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."certificates" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,
    "certificateNumber" TEXT NOT NULL,
    "issuedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "pdfUrl" TEXT,
    "verified" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "certificates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."blog_posts" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "excerpt" TEXT,
    "content" TEXT NOT NULL,
    "featuredImage" TEXT,
    "tags" TEXT[],
    "isPublished" BOOLEAN NOT NULL DEFAULT false,
    "isFeatured" BOOLEAN NOT NULL DEFAULT false,
    "viewCount" INTEGER NOT NULL DEFAULT 0,
    "authorId" TEXT NOT NULL,
    "publishedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "blog_posts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."comments" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "parentId" TEXT,
    "isApproved" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "comments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."events" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "location" TEXT,
    "online" BOOLEAN NOT NULL DEFAULT false,
    "eventUrl" TEXT,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "timezone" TEXT NOT NULL DEFAULT 'UTC',
    "capacity" INTEGER,
    "registered" INTEGER NOT NULL DEFAULT 0,
    "price" DECIMAL(10,2),
    "isPublished" BOOLEAN NOT NULL DEFAULT false,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "organizerId" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "tags" TEXT[],
    "imageUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "events_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."event_registrations" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,
    "registeredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "public"."RegistrationStatus" NOT NULL DEFAULT 'CONFIRMED',
    "notes" TEXT,

    CONSTRAINT "event_registrations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."projects" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "status" "public"."ProjectStatus" NOT NULL DEFAULT 'PLANNING',
    "startDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "budget" DECIMAL(15,2),
    "region" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "coordinates" JSONB,
    "tags" TEXT[],
    "isPublic" BOOLEAN NOT NULL DEFAULT false,
    "leaderId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."notifications" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "type" "public"."NotificationType" NOT NULL,
    "isRead" BOOLEAN NOT NULL DEFAULT false,
    "data" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "notifications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."system_config" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "type" "public"."ConfigType" NOT NULL DEFAULT 'STRING',
    "isPublic" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "system_config_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "public"."users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "accounts_provider_providerAccountId_key" ON "public"."accounts"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "sessions_sessionToken_key" ON "public"."sessions"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "user_profiles_userId_key" ON "public"."user_profiles"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "courses_slug_key" ON "public"."courses"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "course_enrollments_userId_courseId_key" ON "public"."course_enrollments"("userId", "courseId");

-- CreateIndex
CREATE UNIQUE INDEX "course_progress_userId_moduleId_key" ON "public"."course_progress"("userId", "moduleId");

-- CreateIndex
CREATE UNIQUE INDEX "certificates_certificateNumber_key" ON "public"."certificates"("certificateNumber");

-- CreateIndex
CREATE UNIQUE INDEX "certificates_userId_courseId_key" ON "public"."certificates"("userId", "courseId");

-- CreateIndex
CREATE UNIQUE INDEX "blog_posts_slug_key" ON "public"."blog_posts"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "events_slug_key" ON "public"."events"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "event_registrations_userId_eventId_key" ON "public"."event_registrations"("userId", "eventId");

-- CreateIndex
CREATE UNIQUE INDEX "projects_slug_key" ON "public"."projects"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "system_config_key_key" ON "public"."system_config"("key");

-- AddForeignKey
ALTER TABLE "public"."accounts" ADD CONSTRAINT "accounts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."sessions" ADD CONSTRAINT "sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."user_profiles" ADD CONSTRAINT "user_profiles_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."courses" ADD CONSTRAINT "courses_instructorId_fkey" FOREIGN KEY ("instructorId") REFERENCES "public"."users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."course_modules" ADD CONSTRAINT "course_modules_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "public"."courses"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."course_enrollments" ADD CONSTRAINT "course_enrollments_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."course_enrollments" ADD CONSTRAINT "course_enrollments_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "public"."courses"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."course_progress" ADD CONSTRAINT "course_progress_moduleId_fkey" FOREIGN KEY ("moduleId") REFERENCES "public"."course_modules"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."course_materials" ADD CONSTRAINT "course_materials_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "public"."courses"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."certificates" ADD CONSTRAINT "certificates_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."certificates" ADD CONSTRAINT "certificates_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "public"."courses"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."blog_posts" ADD CONSTRAINT "blog_posts_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "public"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."comments" ADD CONSTRAINT "comments_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "public"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."comments" ADD CONSTRAINT "comments_postId_fkey" FOREIGN KEY ("postId") REFERENCES "public"."blog_posts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."comments" ADD CONSTRAINT "comments_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "public"."comments"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."events" ADD CONSTRAINT "events_organizerId_fkey" FOREIGN KEY ("organizerId") REFERENCES "public"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."event_registrations" ADD CONSTRAINT "event_registrations_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."event_registrations" ADD CONSTRAINT "event_registrations_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "public"."events"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."projects" ADD CONSTRAINT "projects_leaderId_fkey" FOREIGN KEY ("leaderId") REFERENCES "public"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."notifications" ADD CONSTRAINT "notifications_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
