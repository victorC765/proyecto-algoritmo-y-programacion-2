-- This script was generated by the ERD tool in pgAdmin 4.
-- Please log an issue at https://redmine.postgresql.org/projects/pgadmin4/issues/new if you find any bugs, including reproduction steps.
BEGIN;


CREATE TABLE IF NOT EXISTS public.cliente
(
    idcliente integer NOT NULL DEFAULT nextval('cliente_idcliente_seq'::regclass),
    nombre character varying(20) COLLATE pg_catalog."default",
    cedula character varying(20) COLLATE pg_catalog."default",
    numero_telefonico character varying(20) COLLATE pg_catalog."default",
    direccion_domiciliaria character varying(30) COLLATE pg_catalog."default",
    sexo sexo NOT NULL,
    CONSTRAINT cliente_pkey PRIMARY KEY (idcliente)
);

CREATE TABLE IF NOT EXISTS public.factura
(
    idfactura integer NOT NULL DEFAULT nextval('factura_idfactura_seq'::regclass),
    idcliente integer,
    idproducto integer,
    metodo_pago metodo_pago NOT NULL,
    cantidad_productos character varying(5) COLLATE pg_catalog."default" NOT NULL,
    fecha character varying(10) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT factura_pkey PRIMARY KEY (idfactura)
);

CREATE TABLE IF NOT EXISTS public.producto
(
    idproducto integer NOT NULL DEFAULT nextval('producto_idproducto_seq'::regclass),
    nombre_producto character varying(20) COLLATE pg_catalog."default" NOT NULL,
    precio character varying(10) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT producto_pkey PRIMARY KEY (idproducto)
);

CREATE TABLE IF NOT EXISTS public.usuario
(
    idusuario integer NOT NULL DEFAULT nextval('usuario_idusuario_seq'::regclass),
    nombre character varying(20) COLLATE pg_catalog."default" NOT NULL,
    cedula character varying(20) COLLATE pg_catalog."default" NOT NULL,
    frase character varying(30) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT usuario_pkey PRIMARY KEY (idusuario)
);

ALTER TABLE IF EXISTS public.factura
    ADD CONSTRAINT factura_idcliente_fkey FOREIGN KEY (idcliente)
    REFERENCES public.cliente (idcliente) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;


ALTER TABLE IF EXISTS public.factura
    ADD CONSTRAINT factura_idproducto_fkey FOREIGN KEY (idproducto)
    REFERENCES public.producto (idproducto) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;

END;