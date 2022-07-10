import React from 'react'
import './Settings.css'
export default function Settings() {
    return (
        <>
            <div id='settings'>
                <div id='linkssettings'>
                    <input id='platform' autoComplete='off' className='textinput' type='text' placeholder='Enlace de la plataforma' />
                    <br />
                    <input id='link1' autoComplete='off' className='textinput' type='text' placeholder='Enlace 1' />
                    <br />
                    <input id='link2' autoComplete='off' className='textinput' type='text' placeholder='Enlace 2' />
                    <br />
                    <input id='link3' autoComplete='off' className='textinput' type='text' placeholder='Enlace 3' />
                    <br />
                    <input id='link4' autoComplete='off' className='textinput' type='text' placeholder='Enlace 4' />
                    <br />
                    <input id='link5' autoComplete='off' className='textinput' type='text' placeholder='Enlace 5' />
                    <br />
                    <input id='link6' autoComplete='off' className='textinput' type='text' placeholder='Enlace 6' />
                    <br />
                    <input id='link7' autoComplete='off' className='textinput' type='text' placeholder='Enlace 7' />
                    <br />
                    <input id='link8' autoComplete='off' className='textinput' type='text' placeholder='Enlace 8' />
                    <br />
                    <input id='link9' autoComplete='off' className='textinput' type='text' placeholder='Enlace 9' />
                    <br />
                    <input id='link10' autoComplete='off' className='textinput' type='text' placeholder='Enlace 10' />
                    <br />
                </div>
                <div id='buttons'>
                    <button id='importnotes' className='btn'>Importar Notas</button>
                    <button id='exportnotes' className='btn'>Exportar Notas</button>
                    <button id='importsettings' className='btn'>Importar Configuración</button>
                    <button id='exportsettings' className='btn'>Exportar Configuración</button>
                    <br/>
                    <input type='file' id='notesfenix'/>
                </div>
                <div id='voices'>
                    <label>Elige la voz de Fénix
                        <br />
                        <select id='voice'>
                            <option value='Microsoft Sabina - Spanish (Mexico)'>Predeterminada</option>
                            <option value='none'>No quiero que Fénix hable</option>
                        </select>
                        <br />
                    </label>
                    <label className='label'>Pitch 
                        <label className='labelcounter' id='pitchcounter'>1</label>
                        <br />
                        <input type='range' className='range' id='pitch' max='2' defaultValue='1' step='.001' />
                        <br />
                    </label>
                    <label className='label'>Velocidad 
                        <label className='labelcounter' id='ratecounter'>1</label>
                    <br />
                        <input type='range' className='range' id='rate' max='2' defaultValue='1' step='.001' />
                    </label>
                    <br />
                    <button id='test' className='btn'>PROBAR</button>
                </div>
            </div>
        </>
    )
}
