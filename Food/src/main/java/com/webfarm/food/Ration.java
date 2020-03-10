package com.webfarm.food;

public class Ration {

    private String nom;
    private String principeActif;
    private int grammage;

    
    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrincipeActif() {
        return principeActif;
    }

    public void setPrincipeActif(String principeActif) {
        this.principeActif = principeActif;
    }

    public int getGrammage() {
        return grammage;
    }

    public void setGrammage(int grammage) {
        this.grammage = grammage;
    }

    public Ration() {
    }

    public Ration(String nom, String principeActif, int grammage) {
        this.nom = nom;
        this.principeActif = principeActif;
        this.grammage = grammage;
    }

    

}
