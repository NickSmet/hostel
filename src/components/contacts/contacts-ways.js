import React from 'react';
import { Panel, PanelGroup } from 'react-bootstrap';

class Ways extends React.Component {

    state = {
        activeKey: ''
    };

    handleSelect = (activeKey) => {
        this.setState({ activeKey });
    };

    render() {
        return (
            <div className='contacts-ways'>
                <PanelGroup
                    accordion
                    id="ways-pannels"
                    activeKey={this.state.activeKey}
                    onSelect={(key) => this.handleSelect(key)}
                >
                    <Panel id="contacts-way-svo" bsClass='contacts-way' key='1' eventKey="1" >
                        <Panel.Heading>
                            <Panel.Title toggle >
                                <span>+</span> От аэропорта Шереметьево
                            </Panel.Title>
                        </Panel.Heading>
                        <Panel.Collapse>
                            <Panel.Body>
                                <p>
                                    На аэроэкспрессе Вы доедете до Белорусского вокзала, 
                                    затем нужно будет спуститься в метро на станцию 
                                    Белорусская радиальная (Замоскворецкая линия, зеленого цвета).
                                </p>
                                <img src="http://dev.centeral.ru/img/svo_1.png" alt="Путь от Шереметьево"/>
                                <p>
                                    От станции Белорусская нужно будет сесть на поезд до 
                                    станции Театральная и проехать 3 остановки.
                                </p>
                                <p>
                                    После того, как Вы прибудете на станцию метро 
                                    “Театральная”, выходите на Театральную площадь.
                                </p>
                                <img src="http://dev.centeral.ru/img/svo_2.png" alt="Путь от Шереметьево"/>
                            </Panel.Body>
                        </Panel.Collapse>
                    </Panel>
                    <Panel id="contacts-way-dme" bsClass='contacts-way' key='2' eventKey="2">
                        <Panel.Heading>
                            <Panel.Title toggle >
                                <span>+</span> От аэропорта Домодедово
                            </Panel.Title>
                        </Panel.Heading>
                        <Panel.Collapse>
                            <Panel.Body>
                                <p>
                                    На аэроэкспрессе Вы доедете до Павелецкого вокзала, 
                                    затем нужно будет перейти на станцию метро 
                                    Павелецкая радиальная (Замоскворецкая линия, зеленого цвета).
                                </p>
                                <img src="http://dev.centeral.ru/img/dme_1.jpg" alt="Путь от Домодедово"/>
                                <p>
                                    От станции Павелецкая нужно будет сесть на поезд 
                                    до станции Театральная и проехать 2 остановки.
                                </p>
                                <p>
                                    После того, как Вы прибудете на станцию метро 
                                    “Театральная”, выходите на Театральную площадь.  
                                </p>
                                <img src="http://dev.centeral.ru/img/dme_2.png" alt="Путь от Домодедово"/>
                            </Panel.Body>
                        </Panel.Collapse>
                    </Panel >
                    <Panel id="contacts-way-vko" bsClass='contacts-way' key='3' eventKey="3">
                        <Panel.Heading>
                            <Panel.Title toggle >
                                <span>+</span> От аэропорта Внуково
                            </Panel.Title>
                        </Panel.Heading>
                        <Panel.Collapse>
                            <Panel.Body>
                                <p>
                                    На аэроэкспрессе Вы доедете до Киевского вокзала, 
                                    затем нужно будет спуститься в метро на станцию Киевская радиальная 
                                    (Арбатско-Покровская линия, синего цвета).
                                </p>
                                <img src="http://dev.centeral.ru/img/vko_1.jpg" alt="Путь от Внуково"/>
                                <p>
                                    От станции Киевская нужно будет сесть на поезд до 
                                    станции Площадь Революции и проехать 3 остановки.
                                </p>
                                <p>
                                    После того, как Вы прибудете на станцию метро 
                                    “Площадь Революции”, выходите на площадь Революции.
                                </p>
                                <img src="http://dev.centeral.ru/img/vko_2.png" alt="Путь от Внуково"/>
                            </Panel.Body>
                        </Panel.Collapse>
                    </Panel>
                </PanelGroup>
            </div>
        );
    }


}

export default Ways;