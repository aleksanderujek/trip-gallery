import { screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { testRender } from '../utils/testRender'
import TripCard from './TripCard'
import { Trip } from '../models/trip'

test('loads and displays header', async () => {
    // ARRANGE
    const trip: Trip = {
        id: 1,
        title: 'hello there',
        subtitle: 'general kenobi',
        description: 'lorem ipsum',
        photoUrl: 'https://via.placeholder.com/150',
        rating: 4,
        co2kilograms: 100,
        countries: ['Italy', 'France'],
        advantages: [],
        days: 3,
    };
    testRender(() => <TripCard trip={trip} />)

    // ACT
    await screen.findByRole('heading')

    // ASSERT
    expect(screen.getByRole('heading')).toHaveTextContent('hello there')
})

test('loads and displays countries number', async () => {
    // ARRANGE
    const trip: Trip = {
        id: 1,
        title: 'hello there',
        subtitle: 'general kenobi',
        description: 'lorem ipsum',
        photoUrl: 'https://via.placeholder.com/150',
        rating: 4,
        co2kilograms: 100,
        countries: ['Italy', 'France'],
        advantages: [],
        days: 3,
    };
    testRender(() => <TripCard trip={trip} />)

    // ACT
    await screen.findByRole('subtitle')

    // ASSERT
    expect(screen.getByRole('subtitle')).toHaveTextContent(`${trip.countries.length} countries, ${trip.days} days`)
})

test('loads and displays emission', async () => {
    // ARRANGE
    const trip: Trip = {
        id: 1,
        title: 'hello there',
        subtitle: 'general kenobi',
        description: 'lorem ipsum',
        photoUrl: 'https://via.placeholder.com/150',
        rating: 4,
        co2kilograms: 100,
        countries: ['Italy', 'France'],
        advantages: [],
        days: 3,
    };
    testRender(() => <TripCard trip={trip} />)

    // ACT
    await screen.findByTestId('emission')

    // ASSERT
    expect(screen.getByTestId('emission')).toHaveTextContent('100kg CO2e')
})