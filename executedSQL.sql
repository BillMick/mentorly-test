-- CreateEnum
CREATE TYPE "Role" AS ENUM ('MENTOR', 'MENTEE', 'ADMIN');

-- CreateEnum
CREATE TYPE "Urgency" AS ENUM ('ASAP', 'SOON', 'FLEXIBLE');

-- CreateEnum
CREATE TYPE "RequestStatus" AS ENUM ('PENDING', 'ACCEPTED', 'REFUSED', 'CANCELLED');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "role" "Role" NOT NULL,
    "is_verified" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MentorProfile" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "title" TEXT NOT NULL DEFAULT 'Mentor',
    "fullname" TEXT NOT NULL,
    "profile_photo" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "languages" TEXT[],
    "areas_of_expertise" TEXT[],
    "experience" TEXT NOT NULL,
    "diplomas" JSONB NOT NULL,
    "certifications" JSONB NOT NULL,
    "mentee_levels" TEXT[],
    "description" TEXT NOT NULL,
    "availability" JSONB NOT NULL,
    "frequency" TEXT NOT NULL,
    "price_per_session" DECIMAL(65,30),

    CONSTRAINT "MentorProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MenteeProfile" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "fullname" TEXT NOT NULL,
    "profile_photo" TEXT,
    "location" TEXT NOT NULL,
    "languages" TEXT[],
    "education_level" TEXT NOT NULL,
    "description" TEXT,
    "objectives" TEXT NOT NULL,
    "subjects_of_interest" TEXT[],
    "urgency" "Urgency" NOT NULL,
    "preferences" TEXT NOT NULL,
    "budget" DECIMAL(65,30),

    CONSTRAINT "MenteeProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubscriptionPlan" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price_eur" DECIMAL(65,30) NOT NULL,
    "duration_days" INTEGER NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "SubscriptionPlan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subscription" (
    "id" TEXT NOT NULL,
    "menteeId" TEXT NOT NULL,
    "planId" TEXT NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Subscription_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MentorshipRequest" (
    "id" TEXT NOT NULL,
    "fromMenteeId" TEXT NOT NULL,
    "toMentorId" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "status" "RequestStatus" NOT NULL DEFAULT 'PENDING',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "responded_at" TIMESTAMP(3),

    CONSTRAINT "MentorshipRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rating" (
    "id" TEXT NOT NULL,
    "mentorId" TEXT NOT NULL,
    "menteeId" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "comment" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Rating_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "MentorProfile_userId_key" ON "MentorProfile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "MenteeProfile_userId_key" ON "MenteeProfile"("userId");

-- AddForeignKey
ALTER TABLE "MentorProfile" ADD CONSTRAINT "MentorProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MenteeProfile" ADD CONSTRAINT "MenteeProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subscription" ADD CONSTRAINT "Subscription_menteeId_fkey" FOREIGN KEY ("menteeId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subscription" ADD CONSTRAINT "Subscription_planId_fkey" FOREIGN KEY ("planId") REFERENCES "SubscriptionPlan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MentorshipRequest" ADD CONSTRAINT "MentorshipRequest_fromMenteeId_fkey" FOREIGN KEY ("fromMenteeId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MentorshipRequest" ADD CONSTRAINT "MentorshipRequest_toMentorId_fkey" FOREIGN KEY ("toMentorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_mentorId_fkey" FOREIGN KEY ("mentorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_menteeId_fkey" FOREIGN KEY ("menteeId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- v2
-- 1. Create "NumberOfVisits" table
CREATE TABLE "NumberOfVisits" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "visit_count" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "NumberOfVisits_pkey" PRIMARY KEY ("id")
);

-- 2. Alter "MentorProfile" table

-- Add "telephone" column
ALTER TABLE "User"
ADD COLUMN "telephone" TEXT;

-- Change "experience" to TEXT[] and make it nullable
-- First drop and re-add the column, assuming no critical data loss (check in prod!)
ALTER TABLE "MentorProfile"
DROP COLUMN "experience";

ALTER TABLE "MentorProfile"
ADD COLUMN "experience" TEXT[];

-- Add foreign keys for "NumberOfVisits"
ALTER TABLE "NumberOfVisits" ADD CONSTRAINT "NumberOfVisits_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;


-- v3
-- Change "[column]" to JSONB into TEXT[]
ALTER TABLE "MentorProfile"
DROP COLUMN "diplomas";
ALTER TABLE "MentorProfile"
ADD COLUMN "diplomas" TEXT[];

ALTER TABLE "MentorProfile"
DROP COLUMN "certifications";
ALTER TABLE "MentorProfile"
ADD COLUMN "certifications" TEXT[];

ALTER TABLE "MentorProfile"
DROP COLUMN "availability";
ALTER TABLE "MentorProfile"
ADD COLUMN "availability" TEXT[];

-- Change "[column]" name
ALTER TABLE "MentorProfile"
DROP COLUMN "price_per_session";
ALTER TABLE "MentorProfile"
ADD COLUMN "price_per_unit" TEXT;

-- Delete [column]
ALTER TABLE "MentorProfile"
DROP COLUMN "frequency";

-- Change "[column]" to TEXT[] into TEXT
ALTER TABLE "MentorProfile"
DROP COLUMN "experience";
ALTER TABLE "MentorProfile"
ADD COLUMN "experience" TEXT;