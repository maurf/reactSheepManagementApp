import React from 'react';
import Aux from '../../hoc/Aux/Aux';
import Chips from '../UI/Chips/Chips';

const ReproductionSteps = props => {
    
    return (
        <Aux>
            <div className="w-full py-6">
                <div className="px-10 text-center mb-8">
                    <label className="block tracking-wide text-gray-800 text-base font-bold mb-2 ml-1">Ciclo #{props.id + 1}</label>
                </div>
                <div className="flex">
                    <div className="w-1/3">
                        <div className="relative mb-2">
                            <div className="w-10 h-10 mx-auto bg-green-300 rounded-full text-lg text-white flex items-center">
                                <span className="text-center text-white w-full">
                                    <svg className="w-full fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                    <path className="heroicon-ui" d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2zm14 8V5H5v6h14zm0 2H5v6h14v-6zM8 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                                    </svg>
                                </span>
                            </div>
                        </div>

                        <div className="text-xs text-center md:text-base text-gray-700">Fecundación</div>
                        <div className="text-xs text-center md:text-base">
                            <input className="form-input text-center" type="text" placeholder="Fecha Fecundación" onChange={ event => props.onChange(event, "breedingDate", props.id) } value={props.breedingDate}/>
                        </div>
                    </div>

                    <div className="w-1/3">
                        <div className="relative mb-2">
                            <div className="absolute flex flex-col align-center items-center align-middle content-center transform -translate-x-1/2 -translate-y-1/2 w-4/6" style={{top: "30%"}}>
                                <div className="text-xs text-center text-sm text-gray-700">Posible parto</div>

                                <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                                    <div className="w-0 bg-green-300 py-1 rounded w-full"></div>
                                </div>
                            </div>

                            <div className="w-10 h-10 mx-auto bg-green-300 rounded-full text-lg text-white flex items-center">
                            <span className="text-center text-white w-full">
                                <svg className="w-full fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path className="heroicon-ui" d="M19 10h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2h-2a1 1 0 0 1 0-2h2V8a1 1 0 0 1 2 0v2zM9 12A5 5 0 1 1 9 2a5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm8 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h5a5 5 0 0 1 5 5v2z"/>
                                </svg>
                            </span>
                            </div>
                        </div>

                        <div className="text-xs text-center md:text-base text-gray-700">Parto</div>
                        <div className="text-xs text-center md:text-base">
                            <input className="form-input text-center" type="text" placeholder="Fecha Parto" onChange={ event => props.onChange(event, "dueDate", props.id) } value={props.dueDate}/>
                            <div className="flex flex-col flex-wrap justify-center items-center text-xs text-center text-sm text-gray-700">
                                Hijos:
                                <Chips onDelete={() => {}}>Arete #234 Azul</Chips>
                                <Chips onDelete={() => {}}>Arete #234 Amarillos</Chips>

                            </div>
                        </div>
                    </div>

                    <div className="w-1/3">
                        <div className="relative mb-2">
                            <div className="absolute flex flex-col align-center items-center align-middle content-center transform -translate-x-1/2 -translate-y-1/2 w-4/6" style={{top: "30%"}}>
                                <div className="text-xs text-center text-sm text-gray-700">Posible destete</div>

                                <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                                    <div className="w-3/6 bg-green-300 py-1 rounded"></div>
                                </div>
                            </div>

                            <div className="w-10 h-10 mx-auto bg-white border-2 border-gray-200 rounded-full text-lg text-white flex items-center">
                                <span className="text-center text-gray-600 w-full">
                                    <svg className="w-full fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                        <path className="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"/>
                                    </svg>
                                </span>
                            </div>
                        </div>

                        <div className="text-xs text-center md:text-base text-gray-700">Destete</div>
                        <div className="text-xs text-center md:text-base">
                            <input className="form-input text-center" type="text" placeholder="Fecha Destete" onChange={ event => props.onChange(event, "weaningDate", props.id) } value={props.weaningDate}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex w-full flex-wrap mt-2 justify-center">
                <hr class="mx-3 border-t-1 border-prymary w-full" />       
            </div> 
        </Aux>

    )
};

export default ReproductionSteps;

