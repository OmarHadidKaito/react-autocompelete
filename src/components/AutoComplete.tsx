import { useState, Fragment } from 'react';
import type { FC, ChangeEvent, KeyboardEvent, MouseEvent } from 'react';

interface Props {
    suggestions: string[];
    onSearch: (e: string) => void
    value: string;
    isLoading: boolean
}

const AutoComplete: FC<Props> = ({ suggestions, onSearch, value, isLoading }) => {
    const [activeSuggestionIndex, setActiveSuggestionIndex] = useState<number>(0);
    const [showSuggestions, setShowSuggestions] = useState<boolean>(false);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        onSearch(e.target.value)
        setActiveSuggestionIndex(0);
        setShowSuggestions(true);
    };

    const onClick = (e: MouseEvent) => {
        onSearch((e.target as HTMLElement).innerText);
        setActiveSuggestionIndex(0);
        setShowSuggestions(false);
    };

    const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        // User pressed the enter key
        if (e.key === 'Enter') {
            onSearch(suggestions[activeSuggestionIndex]);
            setActiveSuggestionIndex(0);
            setShowSuggestions(false);
        }
        // User pressed the up arrow
        else if (e.key === 'ArrowUp') {
            if (activeSuggestionIndex === 0) {
                return;
            }

            setActiveSuggestionIndex(activeSuggestionIndex - 1);
        }
        // User pressed the down arrow
        else if (e.key === 'ArrowDown') {
            if (activeSuggestionIndex - 1 === suggestions.length) {
                return;
            }

            setActiveSuggestionIndex(activeSuggestionIndex + 1);
        }
    };

    const SuggestionsListComponent = () => {
        return (
            <Fragment>
                <div className="suggestions-container" >
                    {suggestions.length !== 0 && isLoading === false && (
                        <ul className="suggestions">
                            {suggestions.map((suggestion, index) => {
                                return (
                                    <li className={index === activeSuggestionIndex ? 'suggestion-active' : ''} key={suggestion} onClick={onClick}>
                                        {suggestion}
                                    </li>
                                );
                            })}
                        </ul>
                    )}
                </div>

                {suggestions.length === 0 && isLoading === false && (
                    <div className="no-suggestions">
                        sorry, no options
                    </div>
                )}

                {isLoading === true && (
                    <div className="no-suggestions">
                        loading
                    </div>
                )}
            </Fragment>
        )
    };

    return (
        <div>
            <input
                type="text"
                onChange={onChange}
                onKeyDown={onKeyDown}
                value={value}
            />
            {showSuggestions && value && <SuggestionsListComponent />}
        </div>
    );
};

export default AutoComplete;
