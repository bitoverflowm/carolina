import React from 'react';


const Emoji_Engine = props => {


    const emoji_dict = {
        'unicorn' : '🦄',
        'VerdeBlocks' : '🐳',
        'Bazaar' : '🍆',
        'DiFunk' : '🧁',
        '0_o' : '🧬',
        'The Nepal Initiative' : '🌌',
        'BudOverflow' : '👽',
        'BitOverflowTV' : '👀',
        'Nasdaq: TradeTalks' : '🤙',
        'Solving Digital Asset Transfers' : '👩‍💻',
        'VerdeBlocks for Sustainable Power' : '🧊',
        'EventMe': '🎉',
        'PayUp': '💸',
        'Mariott Data Breach' : '👾',
        'VentureBeat': '💩',
        'BestLife': '🌈',
        'The Quantum Initiative': '🕉️',
        'love': '❤️'
    }

    return (
        <div className = "emoji">
            <span         
            role="img"
            aria-label={props.label}
            className={props.size ? props.size : 'text-3xl'}
            >
                {emoji_dict[props.label]}
            </span>
        </div>
    )
}

export default Emoji_Engine;
