import React, { Component } from 'react'
import Card from './Card';

export default class Dubai extends Component {
    title = "Burj Khalifa";
    content = "The Burj Khalifa, known as the Burj Dubai prior to its inauguration in 2010, is a skyscraper in Dubai, United Arab Emirates.";
    btn = "Go there";
    img = "https://www.burjkhalifa.ae/en/Images/BurjKhalifa-02982_new_tcm290-85702.jpg";

    render() {
        return (
            <div className="row">
          <Card title={this.title} content={this.content} btn={this.btn} img={this.img} />
          <Card title={this.title} content={this.content} btn={this.btn} img={this.img} />
          <Card title={this.title} content={this.content} btn={this.btn} img={this.img} />
          <Card title={this.title} content={this.content} btn={this.btn} img={this.img} />
          <Card title={this.title} content={this.content} btn={this.btn} img={this.img} />
          <Card title={this.title} content={this.content} btn={this.btn} img={this.img} />
          <Card title={this.title} content={this.content} btn={this.btn} img={this.img} />
          <Card title={this.title} content={this.content} btn={this.btn} img={this.img} />
          <Card title={this.title} content={this.content} btn={this.btn} img={this.img} />
          <Card title={this.title} content={this.content} btn={this.btn} img={this.img} />
          <Card title={this.title} content={this.content} btn={this.btn} img={this.img} />
          <Card title={this.title} content={this.content} btn={this.btn} img={this.img} />
          <Card title={this.title} content={this.content} btn={this.btn} img={this.img} />
          <Card title={this.title} content={this.content} btn={this.btn} img={this.img} />
          <Card title={this.title} content={this.content} btn={this.btn} img={this.img} />
          <Card title={this.title} content={this.content} btn={this.btn} img={this.img} />
          <Card title={this.title} content={this.content} btn={this.btn} img={this.img} />
          <Card title={this.title} content={this.content} btn={this.btn} img={this.img} />
          <Card title={this.title} content={this.content} btn={this.btn} img={this.img} />
          <Card title={this.title} content={this.content} btn={this.btn} img={this.img} />
          <Card title={this.title} content={this.content} btn={this.btn} img={this.img} />
          <Card title={this.title} content={this.content} btn={this.btn} img={this.img} />
          <Card title={this.title} content={this.content} btn={this.btn} img={this.img} />
          <Card title={this.title} content={this.content} btn={this.btn} img={this.img} />
          <Card title={this.title} content={this.content} btn={this.btn} img={this.img} />
          <Card title={this.title} content={this.content} btn={this.btn} img={this.img} />
          <Card title={this.title} content={this.content} btn={this.btn} img={this.img} />
          <Card title={this.title} content={this.content} btn={this.btn} img={this.img} />
          <Card title={this.title} content={this.content} btn={this.btn} img={this.img} />
          <Card title={this.title} content={this.content} btn={this.btn} img={this.img} />
          <Card title={this.title} content={this.content} btn={this.btn} img={this.img} />
          <Card title={this.title} content={this.content} btn={this.btn} img={this.img} />
            </div>
        )
    }
}
