export default{

    bind(el, binding, vnode) {

        let current = 0;
        var run = 0

        el.addEventListener('dblclick', function(){
            let incremento = binding.value || 90;
            let efeito;

            if(!binding.arg || binding.arg == 'rotate'){

                if(binding.modifiers.reverse){
                    current -= incremento;
                }else{
                    current += incremento;
                }

                efeito = `rotate(${current}deg)`;

            }
            else if(binding.arg == 'scale'){
                run++
                if(run == 1) efeito = `scale(${incremento})`;
                else if(run > 1){
                    efeito = `scale(1)`;
                    run = 0;
                } 
                
            }
            
            
            el.style.transform = efeito;

            if(binding.modifiers.animate) el.style.transition = `transform 0.5s`;
        });

    }

};