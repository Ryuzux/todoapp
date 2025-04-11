CREATE TABLE "pdf_files" (
	"id" serial PRIMARY KEY NOT NULL,
	"description" text NOT NULL,
	"file_name" text NOT NULL,
	"file_data" "bytea" NOT NULL,
	"uploaded_at" timestamp DEFAULT now()
);
