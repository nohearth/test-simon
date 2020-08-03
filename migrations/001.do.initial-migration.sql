CREATE TABLE public.user (
  id SERIAL PRIMARY KEY,
  name character varying(255),
  "lastName" character varying(255),
  status character varying(255),
  "createdAt" timestamp with time zone NOT NULL,
  "updatedAt" timestamp with time zone NOT NULL
);

CREATE TABLE public.document (
  id SERIAL PRIMARY KEY,
  name character varying(255),
  category character varying(255),
  "urlDocument" character varying(255),
  "creationDate" date,
  status character varying(255),
  "createdAt" timestamp with time zone NOT NULL,
  "updatedAt" timestamp with time zone NOT NULL,
  "userId" integer,
  "ownerName" character varying(255)
);

CREATE TABLE public."recordDocument" (
  id SERIAL PRIMARY KEY,
  description character varying(255),
  "recordDate" date,
  "documentId" integer
);

CREATE TABLE public."sharedDocument" (
  id SERIAL PRIMARY KEY,
  "shareStatus" character varying(255),
  "userId" integer,
  "documentId" integer
);

ALTER TABLE ONLY public.document
  ADD CONSTRAINT "document_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.user(id);
ALTER TABLE ONLY public."recordDocument"
  ADD CONSTRAINT "recordDocument_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES public.document(id);
ALTER TABLE ONLY public."sharedDocument"
  ADD CONSTRAINT "sharedDocument_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.user(id);
ALTER TABLE ONLY public."sharedDocument"
  ADD CONSTRAINT "sharedDocument_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES public.document(id);