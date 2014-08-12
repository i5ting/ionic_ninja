
## download and unpach /usr/local/mysql

On Unix, to install a compressed tar file binary distribution, unpack it at the installation location you choose (typically /usr/local/mysql).


## install

```
➜  mysql git:(master) ./scripts/mysql_install_db       
Installing MySQL system tables...2014-08-12 10:39:21 0 [Warning] TIMESTAMP with implicit DEFAULT value is deprecated. Please use --explicit_defaults_for_timestamp server option (see documentation for more details).
2014-08-12 10:39:21 38435 [Note] InnoDB: Using atomics to ref count buffer pool pages
2014-08-12 10:39:21 38435 [Note] InnoDB: The InnoDB memory heap is disabled
2014-08-12 10:39:21 38435 [Note] InnoDB: Mutexes and rw_locks use GCC atomic builtins
2014-08-12 10:39:21 38435 [Note] InnoDB: Memory barrier is not used
2014-08-12 10:39:21 38435 [Note] InnoDB: Compressed tables use zlib 1.2.3
2014-08-12 10:39:21 38435 [Note] InnoDB: Not using CPU crc32 instructions
2014-08-12 10:39:21 38435 [Note] InnoDB: Initializing buffer pool, size = 128.0M
2014-08-12 10:39:21 38435 [Note] InnoDB: Completed initialization of buffer pool
2014-08-12 10:39:21 38435 [Note] InnoDB: The first specified data file ./ibdata1 did not exist: a new database to be created!
2014-08-12 10:39:21 38435 [Note] InnoDB: Setting file ./ibdata1 size to 12 MB
2014-08-12 10:39:21 38435 [Note] InnoDB: Database physically writes the file full: wait...
2014-08-12 10:39:21 38435 [Note] InnoDB: Setting log file ./ib_logfile101 size to 48 MB
2014-08-12 10:39:22 38435 [Note] InnoDB: Setting log file ./ib_logfile1 size to 48 MB
2014-08-12 10:39:22 38435 [Note] InnoDB: Renaming log file ./ib_logfile101 to ./ib_logfile0
2014-08-12 10:39:22 38435 [Warning] InnoDB: New log files created, LSN=45781
2014-08-12 10:39:22 38435 [Note] InnoDB: Doublewrite buffer not found: creating new
2014-08-12 10:39:23 38435 [Note] InnoDB: Doublewrite buffer created
2014-08-12 10:39:23 38435 [Note] InnoDB: 128 rollback segment(s) are active.
2014-08-12 10:39:23 38435 [Warning] InnoDB: Creating foreign key constraint system tables.
2014-08-12 10:39:23 38435 [Note] InnoDB: Foreign key constraint system tables created
2014-08-12 10:39:23 38435 [Note] InnoDB: Creating tablespace and datafile system tables.
2014-08-12 10:39:23 38435 [Note] InnoDB: Tablespace and datafile system tables created.
2014-08-12 10:39:23 38435 [Note] InnoDB: Waiting for purge to start
2014-08-12 10:39:23 38435 [Note] InnoDB: 5.6.20 started; log sequence number 0

2014-08-12 10:39:29 38435 [Note] Binlog end
2014-08-12 10:39:29 38435 [Note] InnoDB: FTS optimize thread exiting.
2014-08-12 10:39:29 38435 [Note] InnoDB: Starting shutdown...
2014-08-12 10:39:30 38435 [Note] InnoDB: Shutdown completed; log sequence number 1625977
OK

Filling help tables...2014-08-12 10:39:30 0 [Warning] TIMESTAMP with implicit DEFAULT value is deprecated. Please use --explicit_defaults_for_timestamp server option (see documentation for more details).
2014-08-12 10:39:30 38440 [Note] InnoDB: Using atomics to ref count buffer pool pages
2014-08-12 10:39:30 38440 [Note] InnoDB: The InnoDB memory heap is disabled
2014-08-12 10:39:30 38440 [Note] InnoDB: Mutexes and rw_locks use GCC atomic builtins
2014-08-12 10:39:30 38440 [Note] InnoDB: Memory barrier is not used
2014-08-12 10:39:30 38440 [Note] InnoDB: Compressed tables use zlib 1.2.3
2014-08-12 10:39:30 38440 [Note] InnoDB: Not using CPU crc32 instructions
2014-08-12 10:39:30 38440 [Note] InnoDB: Initializing buffer pool, size = 128.0M
2014-08-12 10:39:30 38440 [Note] InnoDB: Completed initialization of buffer pool
2014-08-12 10:39:30 38440 [Note] InnoDB: Highest supported file format is Barracuda.
2014-08-12 10:39:30 38440 [Note] InnoDB: 128 rollback segment(s) are active.
2014-08-12 10:39:30 38440 [Note] InnoDB: Waiting for purge to start
2014-08-12 10:39:30 38440 [Note] InnoDB: 5.6.20 started; log sequence number 1625977
2014-08-12 10:39:30 38440 [Note] Binlog end
2014-08-12 10:39:30 38440 [Note] InnoDB: FTS optimize thread exiting.
2014-08-12 10:39:30 38440 [Note] InnoDB: Starting shutdown...
2014-08-12 10:39:32 38440 [Note] InnoDB: Shutdown completed; log sequence number 1625987
OK

To start mysqld at boot time you have to copy
support-files/mysql.server to the right place for your system

PLEASE REMEMBER TO SET A PASSWORD FOR THE MySQL root USER !
To do so, start the server, then issue the following commands:

  ./bin/mysqladmin -u root password 'new-password'
  ./bin/mysqladmin -u root -h macdeMacBook-Pro-2.local password 'new-password'

Alternatively you can run:

  ./bin/mysql_secure_installation

which will also give you the option of removing the test
databases and anonymous user created by default.  This is
strongly recommended for production servers.

See the manual for more instructions.

You can start the MySQL daemon with:

  cd . ; ./bin/mysqld_safe &

You can test the MySQL daemon with mysql-test-run.pl

  cd mysql-test ; perl mysql-test-run.pl

Please report any problems at http://bugs.mysql.com/

The latest information about MySQL is available on the web at

  http://www.mysql.com

Support MySQL by buying support/licenses at http://shop.mysql.com

New default config file was created as ./my.cnf and
will be used by default by the server when you start it.
You may edit this file to change server settings

```

## start

```
mysqld_safe &
```

## 修改root密码

```
mysqladmin -u root password 'root'
```

## login

```
mysql -u root -p
```

