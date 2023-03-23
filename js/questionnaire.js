// Déclaration des questions 

var questionR = [new QuestionRadio("Que signifie le sigle ISTQB ?",
                                    [new Reponse("International Software Tester Qualifications Board", false),
                                    new Reponse("Institute of Science, Technology, Quality and Business", false),
                                    new Reponse("International Software Testing Qualifications Board", true),
                                    new Reponse("International Science Testing Qualifications Board", false)]
                                    ),
                new QuestionRadio("Quelle est la définition selon l’ISTQB du test ?",
                        [new Reponse("examen, concours ou épreuve évaluant les capacités d’une personne", false),
                        new Reponse("un moyen d'évaluer la qualité du logiciel", true),
                        new Reponse("opération que l’on fait pour vérifier la véracité d’une hypothèse ou d’un fait", false),
                        new Reponse("méthode ou un processus permettant de vérifier ou de mesurer quelque chose", false)]
                        ),
                new QuestionRadio("A quoi correspond la qualité du point de vue d’un testeur ?",
                        [new Reponse("réduire au maximum le risque de défaillance du logiciel", true),
                        new Reponse("augmenter les capacités du logiciel",false),
                        new Reponse("améliorer le rendu graphique", false),
                        new Reponse("tout casser", false)]
                        ),
                new QuestionCheck("Comment évaluer la fin d’un test ?",
                        [new Reponse("l'outil de test retourne 'Passed'", true),
                        new Reponse("le résultat obtenu est égal au résultat attendu", true),
                        new Reponse("Rien n'est cassé visuellement", false),
                        new Reponse("Le site est down", false)]
                        ),
                new QuestionRadio("Quelle est la fourchette de salaire d’un testeur novice ?",
                        [new Reponse("entre 0€ et 15 000€ brut par an", false),
                        new Reponse("entre 10 900€ et 25 700€ brut par an", false),
                        new Reponse("entre 28 500€ et 33 000€ brut par an", true),
                        new Reponse("entre 40 900€ et 50 000€ brut par an", false)]
                        ),
                new QuestionRadio("Combien de types de tests existe-t’il dans le syllabus ?",
                        [new Reponse("8", false),
                        new Reponse("1", false),
                        new Reponse("4", false),
                        new Reponse("5", true)]
                        ),
                new QuestionCheck("Quels sont les qualités d’un testeur ?",
                        [new Reponse("curiosité", true),
                        new Reponse("pessimisme professionel", true),
                        new Reponse("beauté physique", true),
                        new Reponse("rusé", true)]
                        ),
                new QuestionRadio("Quel est la différence entre une erreur et un défaut ?",
                        [new Reponse("le défaut conduit à l'erreur", false),
                        new Reponse("l'erreur conduit au défaut", true),
                        new Reponse("une personne peut causer un défaut", false),
                        new Reponse("les deux sont identiques", false)]
                        ),
                new QuestionRadio("Que teste-t’on toujours avant toute chose ?",
                        [new Reponse("la connexion", false),
                        new Reponse("la réponse", false),
                        new Reponse("la fonctionnalité critique", true),
                        new Reponse("la redirection", false)]
                        ),
                new QuestionRadio("Est-il possible de tester à 100% ?",
                        [new Reponse("peut-être", false),
                        new Reponse("non, on ne fait qu'y tendre", true),
                        new Reponse("oui", false),
                        new Reponse("la réponse D", false)]
                        ),
                new QuestionRadio("Quel test permet de vérifier qu’une fonctionnalité est utilisable par tous ?",
                        [new Reponse("le test de performance", false),
                        new Reponse("le test d'intégration", false),
                        new Reponse("le test système", false),
                        new Reponse("le test d'utilisabilité", true)]
                        ),
                new QuestionRadio("Combien de niveaux de certification existe-t’il ?",
                        [new Reponse("2", false),
                        new Reponse("5", false),
                        new Reponse("8", false),
                        new Reponse("3", true)]
                        ),
                new QuestionCheck("Quels sont les différents niveaux de testeurs ?",
                                    [new Reponse("niveau fondamental", true),
                                    new Reponse("niveau avancé", true),
                                    new Reponse("niveau expert", true),
                                    new Reponse("niveau débutant", false)]
                                    ),
                new QuestionCheck("Quels outils un testeur doit-il connaitre ? ",
                                    [new Reponse("Cucumber", true),
                                    new Reponse("Jira", true),
                                    new Reponse("Postman", true),
                                    new Reponse("HTML/CSS/JavaScript", true)]
                                    ),
                new QuestionCheck("Quel type de stratégie de test peut-être utilisé dans un projet ?",
                                    [new Reponse("analytique", true),
                                    new Reponse("anti-agression", false),
                                    new Reponse("automatique", false),
                                    new Reponse("réactive", true)]
                                    ),
                new QuestionCheck("Est-ce que gouter une pomme peut-être considéré comme un test ?",
                                    [new Reponse("oui", true),
                                    new Reponse("gouter est un test de dégustation", true),
                                    new Reponse("je ne sais pas", true),
                                    new Reponse("non, car ce n'est pas un test logiciel", true)]
                                    ),
                new QuestionCheck("Quels tests sont de type tests dynamiques ?",
                                    [new Reponse("test d'intégration", true),
                                    new Reponse("test boite noire", true),
                                    new Reponse("test boite blanche", true),
                                    new Reponse("test de données", false)]
                                    ),
                new QuestionCheck("Quels tests sont de type tests statiques ?",
                                    [new Reponse("revues de code", true),
                                    new Reponse("revues de documents", true),
                                    new Reponse("revue de User story", true),
                                    new Reponse("test unitaire", false)]
                                    ),
                new QuestionRadio("Quel est le nom du test qui est basé sur la structure du système ?",
                                    [new Reponse("test unitaire", false),
                                    new Reponse("test de non régression", false),
                                    new Reponse("un test 'boîte blanche'", true),
                                    new Reponse("test statique", false)]
                                    ),
]

var lastQuestion = [
        new QuestionCheck("BONUS : Etes-vous un champion ?",
                                    [new Reponse("C'est un euphémisme", true),
                                    new Reponse("Cela va de soi", true),
                                    new Reponse("Biensûr", true),
                                    new Reponse("Je ne suis pas prétentieux", false)]
                                    )
]
