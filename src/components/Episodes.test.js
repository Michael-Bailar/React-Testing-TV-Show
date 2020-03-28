import React from 'react'
import {render, rerender, queryByTestId, getByText} from '@testing-library/react'
import Episodes from '../components/Episodes'

const mockEpisodesData = [
    {
        id: 553946,
        name: "Chapter One: The Vanishing of Will Byers",
        season: 1,
        number: 1,
        runtime: 60,
        summary: "<p>A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.</p>",
        image: {medium: "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg"}
    },
    {
        id: 578663,
        name: "Chapter Two: The Weirdo on Maple Street",
        season: 1,
        number: 2,
        runtime: 60,
        summary: "<p>While the search for the missing Will continues, Joyce tells Jim about a call she apparently received from her son. Meanwhile, Jane warns Mike that there are bad people after her, and he realizes that she knows what happened to Will.</p>",
        image: {medium: "http://static.tvmaze.com/uploads/images/medium_landscape/72/181376.jpg"}
    }

]

test('renders Episodes component', () => {
    const {queryByTestId, rerender, getByText} = render(<Episodes episodes={[]} />)
    expect(queryByTestId('episodes-test')).not.toBeInTheDocument
    rerender(<Episodes episodes={mockEpisodesData}/>)
    expect(queryByTestId('episodes-test')).toBeInTheDocument
    expect(getByText(/A young boy mysteriously disappears/i))
})
