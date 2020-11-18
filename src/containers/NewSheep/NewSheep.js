import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import * as actions from '../../store/actions/index';
import Modal from '../../components/UI/Modal/Modal';
import ReproductionSteps from '../../components/ReproductionSteps/ReproductionSteps';

const NewSheep = props => {
    
    const dispatch = useDispatch();

    const sheepSaved = useSelector(state => {
        return state.sheepManager.sheepSaved
    })

    const initialState = { 
        born: "",
        sex: "hembra",
        earTag: "",
        tagColor: "",
        breed: "dorper",
        color: "",
        type: "carnico",
        status: "destete",
        description: "",
        source: "nacido_finca",
        boughtPrice: "",
        soldDate: "",
        soldPrice: "",
        reproductiveCycles: []
    }

    const [sheepData, setSheepData] = useState(initialState);

    const startNewSheep = useCallback(() => {
        setSheepData(initialState);
        dispatch(actions.startNewSheep());
    }, [dispatch]);

    useEffect(() => {
        startNewSheep()
    }, [startNewSheep]);

    const inputChangedHandler = (event, inputIdentifier) => {
        const newSheepData = {
            ...sheepData,
            [inputIdentifier]: event.target.value
        }
        console.log("newSheepData ", newSheepData)
        setSheepData(newSheepData);
    }

    const onSaveSheep = () => {
        dispatch(actions.saveNewSheep(sheepData))
    }

    const onAddReproductiveCycle = () => {
        const newCycle = {
            breedingDate: "",
            dueDate: "",
            weaningDate: "",
            lambs: []
        }
        const newSheepData = {
            ...sheepData,
            reproductiveCycles:  sheepData.reproductiveCycles.concat( newCycle )
        }
        setSheepData(newSheepData);
    }

    const onEditReproductiveCycle = (event, inputIdentifier, cycleId) => {

        const newReproductiveCycles = [ ...sheepData.reproductiveCycles ];
        console.log(newReproductiveCycles);

        const newCycle = {
            ...newReproductiveCycles[cycleId],
            [inputIdentifier]: event.target.value
        };
        
        newReproductiveCycles[cycleId] = newCycle;
        console.log(newReproductiveCycles);
        const newSheepData = {
            ...sheepData,
            reproductiveCycles: [...newReproductiveCycles]
            
        }
        console.log(newSheepData);
        setSheepData(newSheepData);
    }

    const redirectHome = () => {
        props.history.replace("/");
    }

    const divStyle = {
        backgroundImage: 'url(https://images.unsplash.com/photo-1588672204561-5638420df69c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1060&q=80)',
    };
    const reproductiveCycles = sheepData.reproductiveCycles.length > 0 ?
        sheepData.reproductiveCycles.map((reproductiveCycle, index) => (
            <ReproductionSteps
                key={index}
                id={index}
                onChange= {onEditReproductiveCycle}
                breedingDate = {reproductiveCycle.breedingDate}
                dueDate = {reproductiveCycle.dueDate}
                weaningDate = {reproductiveCycle.weaningDate}
                lambs = {null}
            />
        )) :  <div class="flex w-full flex-wrap mt-5 justify-center">
                <p class="block tracking-wide text-gray-700 text-base mb-5 ">No Hay Ciclos Reproductivos</p>
                <hr class="mx-3 border-t-1 border-prymary w-full"></hr>
            </div> ;
            
    const modal = sheepSaved ? <Modal 
                                    type="success" 
                                    title="Éxito" 
                                    description="La oveja fue agregada con éxito" 
                                    btnText="Ver Todas" 
                                    clicked={redirectHome} 
                                    cancelClicked={startNewSheep} 
                                    btnColor="green"/> : null;


    return (
        <div className="container mx-auto max-w-5xl px-6 py-8 relative">
            { modal }
            <h3 className="text-gray-700 text-3xl font-medium mb-4">Agregar Oveja</h3>
            <div className="rounded bg-white pb-5">
                <div class="flex w-full flex-wrap mb-6 justify-center bg-primary">
                    <h3 class="block tracking-wide text-white text-xl font-bold mb-3 mt-3  ml-1 ">Datos Generales</h3>
                </div>
                <div className="flex w-full flex-wrap mb-6">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 flex justify-center">
                        <Input
                            key="earTag"
                            elementType="input"
                            elementConfig= {{ type: 'text', placeholder: 'Numero de arete' }}
                            value={sheepData.earTag}
                            changed={event => inputChangedHandler(event, "earTag")}
                            label = "Numero de Arete"
                            /> 
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 flex justify-center">
                        <Input
                            key="tagColor"
                            elementType="input"
                            elementConfig= {{ type: 'text', placeholder: 'Color de arete' }}
                            value={sheepData.tagColor}
                            changed={event => inputChangedHandler(event, "tagColor")}
                            label = "Color de Arete"
                        /> 
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 flex justify-center">
                        <Input
                            key="sex"
                            elementType="select"
                            elementConfig= {{ 
                                options: [
                                    { value: 'hembra', displayValue: 'Hembra' },
                                    { value: 'macho', displayValue: 'Macho' }
                                ] 
                            }}
                            value={sheepData.sex}
                            changed={event => inputChangedHandler(event, "sex")}
                            label = "Sexo"
                            /> 
                    </div>
                    
                </div>
                <div className="flex w-full flex-wrap mb-6">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 flex justify-center">
                        <Input
                            key="born"
                            elementType="input"
                            elementConfig= {{ type: 'text', placeholder: 'Fecha Nacimiento' }}
                            value={sheepData.born}
                            changed={event => inputChangedHandler(event, "born")}
                            label = "Fecha Nacimiento"
                            /> 
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 flex justify-center">
                        <Input
                            key="breed"
                            elementType="select"
                            elementConfig= {{ 
                                options: [
                                    { value: 'dorper', displayValue: 'Dorper' },
                                    { value: 'katahdin', displayValue: 'Katahdin' },
                                    { value: 'white_dorper', displayValue: 'White Dorper' },
                                    { value: 'pelibuey', displayValue: 'Pelibuey' },
                                    { value: 'black_belly', displayValue: 'Black Belly' },
                                    { value: 'media_raza_dorper', displayValue: 'Media Raza Dorper' }
                                ] 
                            }}
                            value={sheepData.breed}
                            changed={event => inputChangedHandler(event, "breed")}
                            label = "Raza"
                            /> 
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 flex justify-center">
                        <Input
                            key="color"
                            elementType="input"
                            elementConfig= {{ type: 'text', placeholder: 'Color' }}
                            value={sheepData.color}
                            changed={event => inputChangedHandler(event, "color")}
                            label = "Color"
                        />  
                    </div>
                </div>
                <div className="flex w-full flex-wrap mb-6">
                    
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 flex justify-center">
                        <Input
                            key="source"
                            elementType="select"
                            elementConfig= {{ 
                                options: [
                                    { value: 'nacido_finca', displayValue: 'Nacido en finca' },
                                    { value: 'compra', displayValue: 'Compra' }
                                ] 
                            }}
                            value={sheepData.source}
                            changed={event => inputChangedHandler(event, "source")}
                            label = "Origen"
                            /> 
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 flex justify-center">
                        <Input
                            key="mother"
                            elementType="input"
                            elementConfig= {{ type: 'text', placeholder: 'Madre' }}
                            value={sheepData.mother}
                            changed={event => inputChangedHandler(event, "mother")}
                            label = "Madre"
                            /> 
                    </div>
                </div>
                <div className="flex w-full flex-wrap mb-6 mt-8 justify-center">
                    <hr className="mx-3 border-t-1 border-prymary w-full" />
                    <h3 className="block tracking-wide text-primary text-xl font-bold mt-2 mb-2  ml-1 ">Condiciones Productivas</h3>
                    <hr className="mx-3 border-t-1 border-prymary w-full" />

                </div>
                <div className="flex w-full flex-wrap mb-6">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 flex justify-center">
                        <Input
                            key="type"
                            elementType="select"
                            elementConfig= {{ 
                                options: [
                                    { value: 'reproductor', displayValue: 'Reproductor' },
                                    { value: 'carnico', displayValue: 'Carnico' }
                                ] 
                            }}
                            value={sheepData.type}
                            changed={event => inputChangedHandler(event, "type")}
                            label = "Tipo"
                            />  
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 flex justify-center">
                        <Input
                            key="status"
                            elementType="select"
                            elementConfig= {{ 
                                options: [
                                    { value: 'prenada', displayValue: 'Preñada' },
                                    { value: 'lactancia', displayValue: 'Lactancia' },
                                    { value: 'destete', displayValue: 'Destete' },
                                    { value: 'desarrollo', displayValue: 'Desarrollo' },
                                    { value: 'engorde', displayValue: 'Engorde' },
                                    { value: 'sacrificio', displayValue: 'Sacrificio' },
                                    { value: 'venta', displayValue: 'Venta' },
                                    { value: 'enferma', displayValue: 'Enferma' },
                                    { value: 'muerte', displayValue: 'Muerte' }
                                ] 
                            }}
                            value={sheepData.status}
                            changed={event => inputChangedHandler(event, "status")}
                            label = "Estado"
                            />  
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 flex justify-center">
                        <Input
                            key="description"
                            elementType="textarea"
                            elementConfig= {{ type: 'textarea', placeholder: 'Descripcion' }}
                            value={sheepData.description}
                            changed={event => inputChangedHandler(event, "description")}
                            label = "Descripcion"
                            /> 
                    </div>
                </div>

                <div className="flex w-full flex-wrap mb-6 mt-8 justify-center">
                    <hr className="mx-3 border-t-1 border-prymary w-full" />
                    <h3 className="block tracking-wide text-primary text-xl font-bold mt-2 mb-2 ml-1 ">Movimientos Económicos</h3>
                    <hr className="mx-3 border-t-1 border-prymary w-full" />
                </div>

                <div className="flex w-full flex-wrap mb-6">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 flex justify-center">
                        <Input
                            key="soldPrice"
                            elementType="input"
                            elementConfig= {{ type: 'text', placeholder: 'Precio Venta' }}
                            value={sheepData.soldPrice}
                            changed={event => inputChangedHandler(event, "soldPrice")}
                            label = "Precio Venta"
                            /> 
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 flex justify-center">
                        <Input
                            key="soldDate"
                            elementType="input"
                            elementConfig= {{ type: 'text', placeholder: 'Fecha Venta' }}
                            value={sheepData.soldDate}
                            changed={event => inputChangedHandler(event, "soldDate")}
                            label = "Fecha Venta"
                            /> 
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 flex justify-center">
                        <Input
                            key="boughtPrice"
                            elementType="input"
                            elementConfig= {{ type: 'text', placeholder: 'Precio Compra' }}
                            value={sheepData.boughtPrice}
                            changed={event => inputChangedHandler(event, "boughtPrice")}
                            label = "Precio Compra"
                            /> 
                    </div>
                </div>

                <div class="flex w-full flex-wrap mt-8 justify-center bg-primary">
                    <h3 class="block tracking-wide text-white text-xl font-bold mt-3 mb-3 ml-1 ">Ciclos Reproductivos</h3>
                </div>
                {reproductiveCycles}
                <div className="text-right px-3 -mt-6">
                    <button className="p-0 w-12 h-12 bg-green-400 rounded-full hover:bg-green-500 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none" onClick={onAddReproductiveCycle}>
                        <svg viewBox="0 0 20 20" enable-background="new 0 0 20 20" className="w-6 h-6 inline-block">
                            <path fill="#FFFFFF" d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                            C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                            C15.952,9,16,9.447,16,10z"></path>
                        </svg>
                    </button>
                </div>

                <div className="flex flex-wrap justify-center pt-4">
                <div className="rounded w-64 h-64 bg-center bg-cover bg-no-repeat" style={divStyle}></div>
                </div>
                <div className="flex flex-wrap justify-center pt-4">
                    <Button btnType="bg-primary" clicked={onSaveSheep}>Enviar</Button>
                    <Button btnType="bg-secondary" clicked={redirectHome}>Cancelar</Button>
                </div>
            </div>
          
        </div> 
        )
}

export default NewSheep;