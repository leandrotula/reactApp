import { render } from '@testing-library/react';
import {ReaderComponent} from '../../src/component/ReaderComponent'

describe("testing reader component", () => {

    test('should render ok with default title provided', () => {

        const title = "default title"
        const {container} = render( <ReaderComponent /> )
        const h1Content = container.querySelector('h1')
        expect(h1Content.innerHTML).toContain(title)
    });

    test('should render ok with provided title', () => {

        const title = "this is a provided title"
        const {container} = render( <ReaderComponent title={title}/> )
        const h1Content = container.querySelector('h1')
        expect(h1Content.innerHTML).toContain(title)
    });
})