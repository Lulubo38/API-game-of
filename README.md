# API Game of Thrones

Ce projet Node.js consiste à construire une API liée à la célèbre série télévisée "Game of Thrones". L'API permet aux utilisateurs de récupérer des informations sur la série, les personnages, les maisons, et bien plus encore. Elle utilise diverses dépendances pour gérer les fonctionnalités côté serveur et faciliter les opérations de base de données.

## Installation

Pour configurer le projet, suivez ces étapes :

1. Assurez-vous d'avoir [Node.js](https://nodejs.org) installé sur votre machine.
2. Clonez ce dépôt ou téléchargez le code source.
3. Naviguez jusqu'au répertoire du projet à l'aide de la ligne de commande.
4. Exécutez la commande suivante pour installer les dépendances requises :

```bash
npm install
```

## Utilisation

Une fois les dépendances installées, vous pouvez utiliser les commandes suivantes :

- `npm start` : Démarre le serveur et exécute l'application.
- `npm test` : Exécute la suite de tests de l'application (actuellement, aucun test spécifié).
- `npm run dev` : Démarre le serveur en utilisant Nodemon, ce qui permet un redémarrage automatique lors de la détection de modifications dans le code source pendant le développement.

## Dépendances

Le projet repose sur les dépendances suivantes :

- [body-parser](https://www.npmjs.com/package/body-parser) : Un middleware d'analyse du corps de requête pour Node.js qui analyse les corps de requête entrants avant de les traiter.
- [express](https://www.npmjs.com/package/express) : Un framework web rapide et minimaliste pour Node.js, utilisé pour créer les points d'extrémité de l'API et gérer les requêtes HTTP.
- [mongoose](https://www.npmjs.com/package/mongoose) : Un outil de modélisation d'objets MongoDB conçu pour fonctionner dans un environnement asynchrone, facilitant les interactions avec la base de données.

## Dépendances de développement

En plus des dépendances principales, le projet utilise également la dépendance de développement suivante :

- [nodemon](https://www.npmjs.com/package/nodemon) : Un utilitaire qui redémarre automatiquement le serveur chaque fois que des modifications sont détectées dans le code source, ce qui rend le développement plus efficace.






