import { CaretRight, DiscordLogo, FileArrowDown, Lightning } from "phosphor-react";
import { Player, Youtube } from "@vime/react";
import '@vime/core/themes/default.css';

export function testando () {
    return (
        <div className="flex-1">
            <div className="bg-black flex justify-center">
                <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
                    <Player>
                        <Youtube videoId="LjxulQ1bEWg"/>
                        <DefaultUi />
                    </Player>
                </div>
            </div>

            <div className="p-8 max-w-[1100px] mx-auto">
                <div className="flex items-start gap-16">
                    <div className="flex-1">
                        <h1 className="text-2xl font-bold">
                             Aula 01 - Abertura do Evento Ignite Lab
                        </h1>

                    <p className="mt-4 text-gray-200 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid ad quia quod vero eos minus ut rerum sapiente consectetur, facere non quidem totam dolore animi officiis nam, voluptas ipsa mollitia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse doloribus expedita at cumque, accusantium sed voluptatibus. Vel, id soluta esse neque magnam rem quia excepturi deleniti itaque temporibus molestiae iste?Lorem ipsum dolor sit amet consectetur adipisicing elit. In perspiciatis sed quae aliquam ducimus unde vero ipsa cupiditate molestiae suscipit soluta harum quos provident facere sapiente placeat, velit veniam nihil!                    
                    </p>

                    <div className="flex itens-center gap-4 mt-6">
                        <img
                            className="h-16 w-16 rounded-full border-2 border-blue-500"
                            src="https://github.com/baladei.png"
                            alt=""
                         />

                        <div className="leading-relaxed">
                            <strong className="font-bold text-2xl block">Fernando Baladei</strong>
                            <span className="text-gray-200 text-sm block">Student of front-end development!</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <a href="" className="p-4 text-sm bg-green-500 flex itens-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors">
                        <DiscordLogo size={24}/>
                        Comunidade do Discord
                    </a>

                    <a href="" className="p-4 text-sm border border-blue-500 text-blue-500 flex itens-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors">
                        <Lightning size={24}/>
                        Acesse o Desafio
                    </a>
                </div>
                </div>

                <div className="gap-8 mt-20 grid grid-cols-2">
                    <a href="" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
                        <div className="bg-green-700 h-full p-6 flex items-center">
                            <FileArrowDown size={40}/>
                        </div>
                        <div className="py-6 leading-relaxed">
                            <strong className="text-2xl">Material Complementar</strong>
                            <p className="text-sm text-gray-200 mt-2">
                                Acesse o material complementar para acelerar o seu desenvolvimento
                            </p>                            
                        </div>
                        <div className="h-full p-6 flex items-center">
                            <CaretRight size={24}/>                             
                        </div>
                    </a>

                    <a href="" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
                        <div className="bg-green-700 h-full p-6 flex items-center">
                            <FileArrowDown size={40}/>
                        </div>
                        <div className="py-6 leading-relaxed">
                            <strong className="text-2xl">Wallpapers Exclusivos</strong>
                            <p className="text-sm text-gray-200 mt-2">
                                Baixe wallpapers exclusivos do Ignite Lab e personalize sua máquina
                            </p>                            
                        </div>
                        <div className="h-full p-6 flex items-center">
                            <CaretRight size={24}/>                             
                        </div>
                    </a>

                </div>
            </div>
        </div>
    )
}