CREATE database play;
use play;

-- TABLE: App 
--

CREATE TABLE App(
    IdApp         INT             AUTO_INCREMENT,
    NameApp       VARCHAR(100)    NOT NULL,
    IdCategory    INT             NOT NULL,
    EstadoApp     CHAR(1)         NOT NULL,
    PRIMARY KEY (IdApp)
)ENGINE=INNODB
;



-- 
-- TABLE: Category 
--

CREATE TABLE Category(
    IdCategory      INT             AUTO_INCREMENT,
    NameCategory    VARCHAR(100)    NOT NULL,
    PRIMARY KEY (IdCategory)
)ENGINE=INNODB
;



-- 
-- TABLE: Has 
--

CREATE TABLE Has(
    IdUser    INT              NOT NULL,
    IdApp     INT              NOT NULL,
    Price     DECIMAL(5, 2)    NOT NULL,
    PRIMARY KEY (IdUser, IdApp)
)ENGINE=INNODB
;



-- 
-- TABLE: Users 
--

CREATE TABLE Users(
    IdUser      INT            AUTO_INCREMENT,
    User        VARCHAR(50)    NOT NULL,
    Password    VARCHAR(50)    NOT NULL,
    Type        CHAR(1)        NOT NULL,
    PRIMARY KEY (IdUser)
)ENGINE=INNODB
;



-- 
-- INDEX: UINameApp 
--

CREATE UNIQUE INDEX UINameApp ON App(NameApp)
;
-- 
-- INDEX: IXNameCategory 
--

CREATE INDEX IXNameCategory ON Category(NameCategory)
;
-- 
-- INDEX: UIUser 
--

CREATE UNIQUE INDEX UIUser ON Users(User)
;
-- 
-- TABLE: App 
--

ALTER TABLE App ADD CONSTRAINT RefCategory2 
    FOREIGN KEY (IdCategory)
    REFERENCES Category(IdCategory)
;


-- 
-- TABLE: Has 
--

ALTER TABLE Has ADD CONSTRAINT RefUsers3 
    FOREIGN KEY (IdUser)
    REFERENCES Users(IdUser)
;

ALTER TABLE Has ADD CONSTRAINT RefApp4 
    FOREIGN KEY (IdApp)
    REFERENCES App(IdApp)
;

