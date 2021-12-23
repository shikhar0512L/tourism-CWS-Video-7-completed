import React, { Component } from 'react';
import Card from './Card';

export default class France extends Component {
    btn = "Book tickets";
    link = "https://www.makemytrip.com/";


    render() {
        return (
            <div className="row">
                <Card title={"Eiffel Tower"} content={"The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower. "} btn={this.btn} img={"https://static.toiimg.com/thumb/msid-82826970,width-900,height-1200,resizemode-6.cms"} link={this.link} />

                <Card title={"Louvre Museum"} content={"DescriptionThe Louvre, or the Louvre Museum, is the world's most-visited museum, and a historic landmark in Paris, France. It is the home of some of the best-known works of art, including the Mona Lisa and the Venus de Milo."} btn={this.btn} img={"https://static.toiimg.com/thumb/44842288/Muse-du-Louvre.jpg?width=1200&height=900"} link={this.link} />

                <Card title={"Château de Versailles"} content={"DescriptionThe Palace of Versailles is a former royal residence located in Versailles, about 12 miles west of Paris, France."} btn={this.btn} img={"https://frenchculture.org/sites/default/files/styles/max/public/marble_courtyard_versailles.jpeg?itok=HvrFCQ63"} link={this.link} />

                <Card title={"Côte d'Azur"} content={"The French Riviera (or Côte d'Azur) is the Mediterranean coast of southeastern France. It includes famously glamorous beach resorts such as Saint-Tropez and Cannes, and the independent microstate of Monaco. A health retreat in the 18th century, the area later attracted aristocrats, artists and the 1960s jet set. Today it's an established holiday destination, with paths connecting many coastal villages and towns."} btn={this.btn} img={"https://www.planetware.com/wpimages/2020/10/france-cote-d-azur-top-attractions-menton.jpg"} link={this.link} />

                <Card title={"Mont Saint-Michel"} content={"DescriptionLe Mont-Saint-Michel is a tidal island and mainland commune in Normandy, France. The island lies approximately one kilometre off the country's north-western coast, at the mouth of the Couesnon River near Avranches and is 7 hectares in area. "} btn={this.btn} img={"https://static.toiimg.com/thumb/70828131/Mont-Saint-Michel.jpg?width=1200&height=900"} link={this.link} />

                <Card title={"Loire Valley Châteaux"} content={"The châteaux of the Loire Valley (French: châteaux de la Loire) are part of the architectural heritage of the historic towns of Amboise, Angers, Blois, Chinon, Montsoreau, Orléans, Saumur, and Tours along the river Loire in France. They illustrate Renaissance ideals of design in France."} btn={this.btn} img={"https://www.planetware.com/photos-large/F/france-loire-valley-chateau-chambord.jpg"} link={this.link} />

                <Card title={"Cathédrale Notre-Dame de Chartres"} content={"DescriptionChartres Cathedral, also known as the Cathedral of Our Lady of Chartres, is a Roman Catholic church in Chartres, France, about 80 km southwest of Paris, and is the seat of the Bishop of Chartres. "} btn={this.btn} img={"https://upload.wikimedia.org/wikipedia/commons/2/28/Notre_Dame_de_Chartres.jpg"} link={this.link} />

                <Card title={"Provence"} content={"Provence, a region in southeastern France bordering Italy and the Mediterranean Sea, is known for its diverse landscapes, from the Southern Alps and Camargue plains to rolling vineyards, olive groves, pine forests and lavender fields. To the south is the Côte d'Azur (or French Riviera), where the elegant city of Nice and glamorous resort towns such as Saint-Tropez and Cannes line the coast."} btn={this.btn} img={"https://cdn.kimkim.com/files/a/images/9774468755a3e0ca576bc78b2bd2f26e059ae083/big-0e37b8da13e99cd7df4d8333e894bb69.jpg"} link={this.link} />

            </div>
        )
    }
}
