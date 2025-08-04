-- Enums
CREATE TYPE "Role" AS ENUM ('MENTOR', 'MENTEE', 'ADMIN');
CREATE TYPE "Urgency" AS ENUM ('ASAP', 'SOON', 'FLEXIBLE');
CREATE TYPE "RequestStatus" AS ENUM ('PENDING', 'ACCEPTED', 'REFUSED', 'CANCELLED');

-- User Table
CREATE TABLE "User" (
    "id" TEXT PRIMARY KEY,
    "email" TEXT NOT NULL UNIQUE,
    "phone" TEXT,
    "password_hash" TEXT NOT NULL,
    "role" "Role" NOT NULL,
    "is_verified" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- MentorProfile Table
CREATE TABLE "MentorProfile" (
    "id" TEXT PRIMARY KEY,
    "user_id" TEXT NOT NULL UNIQUE,
    "fullname" TEXT NOT NULL,
    "avatar" TEXT,
    "title" TEXT DEFAULT 'Mentor',
    "location" TEXT NOT NULL,
    "languages" TEXT[],
    "areas_of_expertise" TEXT[] NOT NULL,
    "experiences" TEXT[],
    "diplomas" TEXT[] NOT NULL,
    "certifications" TEXT[] NOT NULL,
    "mentee_levels" TEXT[],
    "description" TEXT NOT NULL,
    "availability" TEXT[] NOT NULL,
    "price_per_unit" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "MentorProfile_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- MenteeProfile Table
CREATE TABLE "MenteeProfile" (
    "id" TEXT PRIMARY KEY,
    "user_id" TEXT NOT NULL UNIQUE,
    "fullname" TEXT NOT NULL,
    "avatar" TEXT,
    "title" TEXT DEFAULT 'Mentoré',
    "location" TEXT NOT NULL,
    "languages" TEXT[],
    "education_level" TEXT NOT NULL,
    "description" TEXT,
    "objectives" TEXT NOT NULL,
    "subjects_of_interest" TEXT[],
    "urgency" "Urgency" NOT NULL,
    "preferences" TEXT NOT NULL,
    "budget" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "MenteeProfile_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- NumberOfVisits Table
CREATE TABLE "NumberOfVisits" (
    "id" SERIAL PRIMARY KEY,
    "user_id" TEXT NOT NULL,
    "visitor_id" TEXT NOT NULL,
    "visited_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "NumberOfVisits_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "NumberOfVisits_visitor_id_fkey" FOREIGN KEY ("visitor_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- SubscriptionPlan Table
CREATE TABLE "SubscriptionPlan" (
    "id" SERIAL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "price_eur" DECIMAL(10,2) NOT NULL,
    "duration_days" INTEGER NOT NULL,
    "benefits" TEXT[],
    "category" "Role" NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Subscription Table
CREATE TABLE "Subscription" (
    "id" SERIAL PRIMARY KEY,
    "user_id" TEXT NOT NULL,
    "plan_id" INTEGER NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    CONSTRAINT "Subscription_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Subscription_plan_id_fkey" FOREIGN KEY ("plan_id") REFERENCES "SubscriptionPlan"("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- MentorshipRequest Table
CREATE TABLE "MentorshipRequest" (
    "id" SERIAL PRIMARY KEY,
    "from_mentee_id" TEXT NOT NULL,
    "to_mentor_id" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "status" "RequestStatus" NOT NULL DEFAULT 'PENDING',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "responded_at" TIMESTAMP(3),
    CONSTRAINT "MentorshipRequest_from_mentee_id_fkey" FOREIGN KEY ("from_mentee_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "MentorshipRequest_to_mentor_id_fkey" FOREIGN KEY ("to_mentor_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- Rating Table
CREATE TABLE "Rating" (
    "id" SERIAL PRIMARY KEY,
    "mentor_id" TEXT NOT NULL,
    "visitor_id" TEXT NOT NULL,
    "rating" INTEGER NOT NULL CHECK ("rating" >= 1 AND "rating" <= 5),
    "comment" TEXT,
    "is_anonymous" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Rating_mentor_id_fkey" FOREIGN KEY ("mentor_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Rating_visitor_id_fkey" FOREIGN KEY ("visitor_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE
);
