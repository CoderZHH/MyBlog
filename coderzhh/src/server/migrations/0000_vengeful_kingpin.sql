CREATE TABLE "VisitCt" (
	"id" serial PRIMARY KEY NOT NULL,
	"visit_time" timestamp DEFAULT now() NOT NULL
);
