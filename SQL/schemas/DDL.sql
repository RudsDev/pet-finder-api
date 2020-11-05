
CREATE TABLE Adress
(
  id character varying(150) NOT NULL,
  state character varying(50) NOT NULL,
  city character varying(50) NOT NULL,
  street character varying(50) NOT NULL,
  home_number character varying(50),
  CONSTRAINT adress_pkey PRIMARY KEY (id)
)

CREATE TABLE Users
(
  id character varying(150) NOT NULL,
  password character varying(150) NOT NULL,
  name character varying(50) NOT NULL,
  email character varying(50) NOT NULL,
  id_adress character varying(150),

  CONSTRAINT user_pkey PRIMARY KEY (id),
  CONSTRAINT adress_fkey FOREIGN KEY(id_adress)
      REFERENCES Adress(id) ON DELETE NO ACTION
)

CREATE TABLE Pets
(
  id character varying(150) NOT NULL,
  species character varying(50) NOT NULL,
  name character varying(50) NOT NULL,
  breed character varying(50) NOT NULL,
  age smallint,
  weight numeric(4,2),
  id_user character varying(150),

  CONSTRAINT pet_pkey PRIMARY KEY (id),
  CONSTRAINT user_fkey FOREIGN KEY (id_user)
	REFERENCES Users (id) ON DELETE NO ACTION
)

ALTER TABLE Pets ALTER COLUMN weight TYPE double precision;
