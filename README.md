# vue-containar

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



### In case of
In case of changeing setting 
``` HOST="localhost" ```
``` source ~/.bash_profile ```



### Deployment


#### ContainAR-Server

Zugriff mithilfe von Termius und SSH und dem klbadm User

Verzeichnis Git Dateien:
Um das aktuelle Repo von Git zu holen und zu bilden unter dist.

```
cd /home/klbadm/git/vue-containar
```

```
git pull
```

```
User: Benbinary94
```

```
PW: XXXX
```

```
npm run build
```

- Stoppen des Apache Services
```
sudo service apache2 stop
```

- Löschen von dem Verzeichnis 
```
sudo rm -rf /var/www/containar
```


- Kopieren des neuen Build-Verzeichnis in Produktivumgebung
```
sudo cp -a /home/klbadm/git/vue-containar/dist/ /var/www/containar
```

- Starten des Dienstes
```
sudo service apache2 start
```


Sonstige Commands
```
DocumentRoot /home/klbadm/git/vue-containar/dist
```

```
/var/www
```

```
sudo a2ensite containar.app
```

```
Cd /etc/apache2/sites-available
```

```
sudo cp -a /home/klbadm/git/vue-containar/dist/ . /var/www/containar
```


SKRIPT

``` 
sudo service apache2 stop 
```
``` 
sudo rm -rf /var/www/containar 
```
``` 
sudo cp -a /home/klbadm/git/vue-containar/dist/ /var/www/containar 
```
```
sudo service apache2 start 
```