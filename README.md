# LOCALIB

Localib est une application de locations de véhicules a créer dans le cadre de ma formation Développeur Full-Stack.

## Contexte et objectifs de l'application

L'entreprise Localib est une entreprise spécialisée dans la location de véhicules à des particuliers. Ils viennent d'ouvrir un magasin dans la ville de Lille et souhaitent une application afin de faciliter la gestion de leurs fichiers client, de leurs différents véhicules ainsi que leurs locations. L'application est donc destinée à une utilisation interne par les employés uniquement.

Localib souhaite que l'application puisse répertorier tous les véhicules dont ils disposent sur une page de **gestion des véhicules**. Ainsi, ils pourront ajouter de nouveaux véhicules ou mettre à jour certaines informations importantes :
- Marque
- Modèle
- Immatriculation
- Etat du véhicule (A,B,C,D)
- Prix de location à la journée
- Disponibilité
- Type de véhicule (Voiture, Camion, Utilitaire, Moto)

Lorsqu'un client se rend dans la boutique de Localib, il vient au contact d'un ou d'une employé(e) pour savoir s'il est possible de louer un véhicule. L'employé(e) peut vérifier d'un seul coup d'oeil sur une page de **location des véhicules** si certains sont disponibles ou non.

Lorsque le client est décidé à louer un véhicule, Localib a besoin de certaines informations sur lui afin d'éviter tout problèmes :

- Nom / Prénom
- Date de naissance
- Email
- Numéro de téléphone

Ces différentes informations sont renseignées par l'employé(e) dans la page de **gestion des locataires**. Ainsi, Localib disposera d'une liste de toutes les personnes qui ont déjà loué un véhicule chez eux au cas où ces locataires reviennent. S'il le souhaite, un locataire peut demander à faire supprimer ou modifier ses informations.

Si un véhicule est disponible et que le locataire est bien enregistré sur l'application, l'employé(e) peut procéder à la location via la page de **location des véhicules**. Le locataire devra alors préciser à son interlocuteur(trice) les informations :
- Date de début de location
- Date de fin de location

L'application déterminera de manière automatique le prix total de la location en fonction de la période choisie.

Un récapitulatif de la location est automatiquement disponible sur une page de **gestion des locations**.


## Diagramme UML de classe entités/relations 

![Diagramme UML de classe entités/relations ](/assets/UML_diagram_entity-relationship.jpg).