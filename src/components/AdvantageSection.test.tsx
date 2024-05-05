import { screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { testRender } from '../utils/testRender'
import { TripAdvantage } from '../models/trip'
import AdvantageSection from './AdvantageSection'

test('loads and displays title', async () => {
    // ARRANGE
    const tripAdvantage: TripAdvantage = {
        title: 'Advantage title',
        description: 'Advantage description'
    };
    testRender(() => <AdvantageSection advantage={tripAdvantage} />)

    // ACT
    await screen.findByRole('heading')

    // ASSERT
    expect(screen.getByRole('heading')).toHaveTextContent(tripAdvantage.title)
})

test('loads and displays description', async () => {
    // ARRANGE
    const tripAdvantage: TripAdvantage = {
        title: 'Advantage title',
        description: 'Advantage description'
    };
    testRender(() => <AdvantageSection advantage={tripAdvantage} />)

    // ACT
    await screen.findByTestId('advantage-description')

    // ASSERT
    expect(screen.getByTestId('advantage-description')).toHaveTextContent(tripAdvantage.description)
})