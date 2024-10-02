create table Trasaction (
idTransaction int AUTO_INCREMENT primary key,
date Date,
frais int,
montant int,
idCompte int,
foreign key idCompte references Compte(idCompte)
);


INSERT INTO Client (nom, prenom, tel, address) VALUES ('Diop', 'Cheikh', '771373956', 'Pikine');
INSERT INTO Demandeur(nom, prenom, tel, idTypeCompte) VALUES ('wone','abdou','774422854','1');
INSERT INTO TypeCompte( type) VALUES ('courant');
INSERT INTO `ChargerClient`(nom, prenom, tel) VALUES ('ndiaye','yaba','778939021');
INSERT INTO Transaction (date, frais, montant, idCompte) VALUES ('22/06/2024','400','5000',1);


create table ProduitCommande(
    idProduitCommand int AUTO_INCREMENT primary key,
    idProduit int,
    foreign key idProduit references Produit(idProduit),
    idCommande int,
    foreign key idCommande references Commande(idCommande)
    );

mysql> show DATABASES;
+--------------------+
| Database           |
+--------------------+
| CompteBancaire     |
| gestion            |
| information_schema |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
6 rows in set (0,01 sec)

mysql> use CompteBancaire;
Database changed



Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql> CREATE TABLE Client (
    ->     idClient INT AUTO_INCREMENT PRIMARY KEY,
    ->     nom VARCHAR(10),
    ->     prenom VARCHAR(10),
    ->     tel VARCHAR(12),
    ->     address VARCHAR(12)
    -> );
    


mysql> CREATE TABLE Client (
    ->     idClient INT AUTO_INCREMENT PRIMARY KEY,
    ->     nom VARCHAR(10),
    ->     prenom VARCHAR(10),
    ->     tel VARCHAR(12),
    ->     address VARCHAR(12)
    -> );
Query OK, 0 rows affected (0,02 sec)

mysql> CREATE TABLE ResponsableClient (
    ->     idResClient INT AUTO_INCREMENT PRIMARY KEY,
    ->     nom VARCHAR(10),
    ->     prenom VARCHAR(10),
    ->     tel VARCHAR(12),
    ->     address VARCHAR(12)
    -> );
Query OK, 0 rows affected (0,05 sec)

mysql> CREATE TABLE Etat (
    ->     idEtat INT AUTO_INCREMENT PRIMARY KEY,
    ->     actif BOOL,
    ->     inactif BOOL
    -> );
Query OK, 0 rows affected (0,03 sec)

mysql> CREATE TABLE Demandeur (
    ->     idDemande INT AUTO_INCREMENT PRIMARY KEY,
    ->     nom VARCHAR(10),
    ->     prenom VARCHAR(10),
    ->     tel VARCHAR(12)
    -> );
Query OK, 0 rows affected (0,02 sec)

mysql> REATE TABLE ChargerClient (
    ->     idChargerClient INT AUTO_INCREMENT PRIMARY KEY,
    ->     nom VARCHAR(10),
    ->     prenom VARCHAR(10),
    ->     tel VARCHAR(12)
    -> );


mysql> CREATE TABLE ChargerClient (
    ->     idChargerClient INT AUTO_INCREMENT PRIMARY KEY,
    ->     nom VARCHAR(10),
    ->     prenom VARCHAR(10),
    ->     tel VARCHAR(12)
    -> );
Query OK, 0 rows affected (0,03 sec)

mysql> CREATE TABLE TypeCompte (
    ->     idTypeCompte INT AUTO_INCREMENT PRIMARY KEY,
    ->     type ENUM('cheque', 'epargne', 'courant')
    -> );
Query OK, 0 rows affected (0,03 sec)

mysql> CREATE TABLE EtatDemande (
    ->     idEtatDemande INT AUTO_INCREMENT PRIMARY KEY,
    ->     etat ENUM('en_cour', 'transferer', 'terminer')
    -> );
Query OK, 0 rows affected (0,03 sec)


mysql> DROP table Etat;
Query OK, 0 rows affected (0,02 sec)

mysql> CREATE TABLE Etat (
    ->     idEtat INT AUTO_INCREMENT PRIMARY KEY,
    ->     etat ENUM('actif', 'inactif')
    -> );
Query OK, 0 rows affected (0,02 sec)

mysql> 

mysql> CREATE TABLE Agent(
    ->     idAgent INT AUTO_INCREMENT PRIMARY KEY,
    ->     nom VARCHAR(10),
    ->     prenom VARCHAR(10),
    ->     tel varchar(12),
    ->     address varchar(10)
    -> );
Query OK, 0 rows affected (0,02 sec)

mysql> CREATE TABLE Compte (
    ->     idCompte INT AUTO_INCREMENT PRIMARY KEY,
    ->     idClient INT,
    ->     idAgent INT,
    ->     idResClient INT,
    ->     idEtat INT,
    ->     FOREIGN KEY (idClient) REFERENCES Client(idClient),
    ->     FOREIGN KEY (idAgent) REFERENCES Agent(idAgent),
    ->     FOREIGN KEY (idResClient) REFERENCES ResponsableClient(idResClient),
    ->     FOREIGN KEY (idEtat) REFERENCES Etat(idEtat)
    -> );
Query OK, 0 rows affected (0,05 sec)


mysql> ALTER TABLE Demandeur 
    -> ADD COLUMN idTypeCompte INT,
    -> ADD FOREIGN KEY (idTypeCompte) REFERENCES TypeCompte(idTypeCompte);
Query OK, 0 rows affected (0,06 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> create table Trasaction (
    -> idTransaction int AUTO_INCREMENT primary key,
    -> date Date,
    -> frais int,
    -> montant int,
    -> idCompte int,
    -> foreign key idCompte references Compte(idCompte)
    -> );

mysql> CREATE TABLE Transaction (
    ->     idTransaction INT AUTO_INCREMENT PRIMARY KEY,
    ->     date DATE,
    ->     frais INT,
    ->     montant INT,
    ->     idCompte INT,
    ->     FOREIGN KEY (idCompte) REFERENCES Compte(idCompte)
    -> );
Query OK, 0 rows affected (0,04 sec)

mysql> 
mysql> INSERT INTO Client (nom, prenom, tel, address) VALUES ('Diop', 'Cheikh', '771373956', 'Pikine');
Query OK, 1 row affected (0,01 sec)

mysql> INSERT INTO TypeCompte( type) VALUES ('courant');
Query OK, 1 row affected (0,01 sec)

mysql> select * from TypeCompte;
+--------------+---------+
| idTypeCompte | type    |
+--------------+---------+
|            1 | courant |
+--------------+---------+
1 row in set (0,00 sec)

mysql> INSERT INTO Demandeur(nom, prenom, tel, idTypeCompte) VALUES ('wone','abdou','774422854','1');
Query OK, 1 row affected (0,01 sec)

mysql> select * from TypeCompte;
+--------------+---------+
| idTypeCompte | type    |
+--------------+---------+
|            1 | courant |
+--------------+---------+
1 row in set (0,00 sec)

mysql> select * from Demandeur;
+-----------+------+--------+-----------+--------------+
| idDemande | nom  | prenom | tel       | idTypeCompte |
+-----------+------+--------+-----------+--------------+
|         2 | wone | abdou  | 774422854 |            1 |
+-----------+------+--------+-----------+--------------+
1 row in set (0,00 sec)

mysql> SHOW PLUGINS;
+---------------------------------+----------+--------------------+----------------+---------+
| Name                            | Status   | Type               | Library        | License |
+---------------------------------+----------+--------------------+----------------+---------+
| binlog                          | ACTIVE   | STORAGE ENGINE     | NULL           | GPL     |
| mysql_native_password           | ACTIVE   | AUTHENTICATION     | NULL           | GPL     |
| sha256_password                 | ACTIVE   | AUTHENTICATION     | NULL           | GPL     |
| caching_sha2_password           | ACTIVE   | AUTHENTICATION     | NULL           | GPL     |
| sha2_cache_cleaner              | ACTIVE   | AUDIT              | NULL           | GPL     |
| daemon_keyring_proxy_plugin     | ACTIVE   | DAEMON             | NULL           | GPL     |
| CSV                             | ACTIVE   | STORAGE ENGINE     | NULL           | GPL     |
| MEMORY                          | ACTIVE   | STORAGE ENGINE     | NULL           | GPL     |
| InnoDB                          | ACTIVE   | STORAGE ENGINE     | NULL           | GPL     |
| INNODB_TRX                      | ACTIVE   | INFORMATION SCHEMA | NULL           | GPL     |
| INNODB_CMP                      | ACTIVE   | INFORMATION SCHEMA | NULL           | GPL     |
| INNODB_CMP_RESET                | ACTIVE   | INFORMATION SCHEMA | NULL           | GPL     |
| INNODB_CMPMEM                   | ACTIVE   | INFORMATION SCHEMA | NULL           | GPL     |
| INNODB_CMPMEM_RESET             | ACTIVE   | INFORMATION SCHEMA | NULL           | GPL     |
| INNODB_CMP_PER_INDEX            | ACTIVE   | INFORMATION SCHEMA | NULL           | GPL     |
| INNODB_CMP_PER_INDEX_RESET      | ACTIVE   | INFORMATION SCHEMA | NULL           | GPL     |
| INNODB_BUFFER_PAGE              | ACTIVE   | INFORMATION SCHEMA | NULL           | GPL     |
| INNODB_BUFFER_PAGE_LRU          | ACTIVE   | INFORMATION SCHEMA | NULL           | GPL     |
| INNODB_BUFFER_POOL_STATS        | ACTIVE   | INFORMATION SCHEMA | NULL           | GPL     |
| INNODB_TEMP_TABLE_INFO          | ACTIVE   | INFORMATION SCHEMA | NULL           | GPL     |
| INNODB_METRICS                  | ACTIVE   | INFORMATION SCHEMA | NULL           | GPL     |
| INNODB_FT_DEFAULT_STOPWORD      | ACTIVE   | INFORMATION SCHEMA | NULL           | GPL     |
| INNODB_FT_DELETED               | ACTIVE   | INFORMATION SCHEMA | NULL           | GPL     |
| INNODB_FT_BEING_DELETED         | ACTIVE   | INFORMATION SCHEMA | NULL           | GPL     |
| INNODB_FT_CONFIG                | ACTIVE   | INFORMATION SCHEMA | NULL           | GPL     |
| INNODB_FT_INDEX_CACHE           | ACTIVE   | INFORMATION SCHEMA | NULL           | GPL     |
| INNODB_FT_INDEX_TABLE           | ACTIVE   | INFORMATION SCHEMA | NULL           | GPL     |
| INNODB_TABLES                   | ACTIVE   | INFORMATION SCHEMA | NULL           | GPL     |
| INNODB_TABLESTATS               | ACTIVE   | INFORMATION SCHEMA | NULL           | GPL     |
| INNODB_INDEXES                  | ACTIVE   | INFORMATION SCHEMA | NULL           | GPL     |
| INNODB_TABLESPACES              | ACTIVE   | INFORMATION SCHEMA | NULL           | GPL     |
| INNODB_COLUMNS                  | ACTIVE   | INFORMATION SCHEMA | NULL           | GPL     |
| INNODB_VIRTUAL                  | ACTIVE   | INFORMATION SCHEMA | NULL           | GPL     |
| INNODB_CACHED_INDEXES           | ACTIVE   | INFORMATION SCHEMA | NULL           | GPL     |
| INNODB_SESSION_TEMP_TABLESPACES | ACTIVE   | INFORMATION SCHEMA | NULL           | GPL     |
| MyISAM                          | ACTIVE   | STORAGE ENGINE     | NULL           | GPL     |
| MRG_MYISAM                      | ACTIVE   | STORAGE ENGINE     | NULL           | GPL     |
| PERFORMANCE_SCHEMA              | ACTIVE   | STORAGE ENGINE     | NULL           | GPL     |
| TempTable                       | ACTIVE   | STORAGE ENGINE     | NULL           | GPL     |
| ARCHIVE                         | ACTIVE   | STORAGE ENGINE     | NULL           | GPL     |
| BLACKHOLE                       | ACTIVE   | STORAGE ENGINE     | NULL           | GPL     |
| FEDERATED                       | DISABLED | STORAGE ENGINE     | NULL           | GPL     |
| ngram                           | ACTIVE   | FTPARSER           | NULL           | GPL     |
| mysqlx_cache_cleaner            | ACTIVE   | AUDIT              | NULL           | GPL     |
| mysqlx                          | ACTIVE   | DAEMON             | NULL           | GPL     |
| auth_socket                     | ACTIVE   | AUTHENTICATION     | auth_socket.so | GPL     |
+---------------------------------+----------+--------------------+----------------+---------+
46 rows in set (0,00 sec)

mysql> INSERT INTO `ChargerClient`(nom, prenom, tel) VALUES ('ndiaye','yaba','778939021');
Query OK, 1 row affected (0,01 sec)

mysql> select * from Compte;
Empty set (0,00 sec)

mysql> select * from Compte;
+----------+----------+---------+-------------+--------+
| idCompte | idClient | idAgent | idResClient | idEtat |
+----------+----------+---------+-------------+--------+
|        5 |        1 |       1 |           1 |      1 |
+----------+----------+---------+-------------+--------+
1 row in set (0,00 sec)

| nom  |
+------+
| Diop |
+------+
1 row in set (0,00 sec)

mysql> select * from Client;
+----------+------+--------+-----------+---------+
| idClient | nom  | prenom | tel       | address |
+----------+------+--------+-----------+---------+
|        1 | Diop | Cheikh | 771373956 | Pikine  |
+----------+------+--------+-----------+---------+
1 row in set (0,00 sec)


mysql> select * from Etat;
+--------+-------+
| idEtat | etat  |
+--------+-------+
|      1 | actif |
+--------+-------+
1 row in set (0,00 sec)

mysql> select * from Etat,Compte where Compte.idEtat=Etat.idEtat;
+--------+-------+----------+----------+---------+-------------+--------+
| idEtat | etat  | idCompte | idClient | idAgent | idResClient | idEtat |
+--------+-------+----------+----------+---------+-------------+--------+
|      1 | actif |        5 |        1 |       1 |           1 |      1 |
+--------+-------+----------+----------+---------+-------------+--------+
1 row in set (0,00 sec)

mysql> select * from Etat,Compte where Compte.idEtat=Etat.idEtat and Etat.etat='actif';
+--------+-------+----------+----------+---------+-------------+--------+
| idEtat | etat  | idCompte | idClient | idAgent | idResClient | idEtat |
+--------+-------+----------+----------+---------+-------------+--------+
|      1 | actif |        5 |        1 |       1 |           1 |      1 |
+--------+-------+----------+----------+---------+-------------+--------+
1 row in set (0,00 sec)

mysql> select * from Etat,Compte where Compte.idEtat=Etat.idEtat and Etat.etat='inactif';
Empty set (0,00 sec)


mysql> select etat,Etat.idEtat  from Etat,Compte where Compte.idEtat=Etat.idEtat and Etat.etat='inactif';
Empty set (0,00 sec)

mysql> select etat,Etat.idEtat  from Etat,Compte where Compte.idEtat=Etat.idEtat and Etat.etat='actif';
+-------+--------+
| etat  | idEtat |
+-------+--------+
| actif |      1 |
+-------+--------+
1 row in set (0,00 sec)

mysql> create DATABASE AUCHAN;
Query OK, 1 row affected (0,01 sec)

mysql> use AUCHAN;
Database changed
mysql> create table Vendeur (
    -> idVendeur int AUTO_INCREMENT primary key,
    -> nom varchar(10),
    -> prenom varchar(10),
    -> tel varchar(12),
    -> address varchar(12)
    -> );
Query OK, 0 rows affected (0,03 sec)

mysql> create table Produit (
    -> idProduit int AUTO_INCREMENT primary key,
    -> libeller varchar(10),
    -> quantiter int,
    -> prix int,
    -> ):
    -> ^C
mysql> create table Produit (
    -> idProduit int AUTO_INCREMENT primary key,
    -> libeller varchar(10),
    -> quantiter int,
    -> prix int
    -> );
Query OK, 0 rows affected (0,02 sec)

mysql> create table Facture (
    -> idFacure int AUTO_INCREMENT primary key,
    -> libeller varchar(10),
    -> data Date NOT Null
    -> );
Query OK, 0 rows affected (0,03 sec)


mysql> create table Paiement (
    -> idPaiement int AUTO_INCREMENT primary key,
    -> libeller varchar(10),
    -> montant int,
    -> idFacture int,
    -> date Date NOT Null,
    -> foreign key (idFacture) references Facture(idFacture)
    -> );
Query OK, 0 rows affected (0,03 sec)






