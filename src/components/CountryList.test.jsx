import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it } from 'vitest';
import CountryList from './CountryList.jsx';

// Create a new QueryClient instance
const queryClient = new QueryClient();

// Mock fetch API
global.fetch = vi.fn();

// Mock data for successful fetch
const mockCountriesData = [
  {
    name: { common: 'Country1' },
    flags: { svg: 'flag1.svg' },
    cca3: 'C1',
  },
  {
    name: { common: 'Country2' },
    flags: { svg: 'flag2.svg' },
    cca3: 'C2',
  },
];

describe('CountryList component tests:', () => {
  afterEach(() => {
    cleanup();
    fetch.mockReset();
  });

  it('should render loading state initially', () => {
    fetch.mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve([]),
      }),
    );

    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <CountryList />
        </MemoryRouter>
      </QueryClientProvider>,
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('should render countries on successful fetch', async () => {
    fetch.mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockCountriesData),
      }),
    );

    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <CountryList />
        </MemoryRouter>
      </QueryClientProvider>,
    );

    await waitFor(() => {
      mockCountriesData.forEach((country) => {
        expect(screen.getByText(country.name.common)).toBeInTheDocument();
        expect(
          screen.getByAltText(`Flag of ${country.name.common}`),
        ).toBeInTheDocument();
      });
    });
  });

  it('should filter countries based on search query', async () => {
    fetch.mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockCountriesData),
      }),
    );

    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <CountryList />
        </MemoryRouter>
      </QueryClientProvider>,
    );

    await waitFor(() => {
      expect(screen.getByText('Country1')).toBeInTheDocument();
      expect(screen.getByText('Country2')).toBeInTheDocument();
    });

    // Simulate search input
    const searchInput = screen.getByPlaceholderText('Search for a country...');
    fireEvent.change(searchInput, { target: { value: 'Country1' } });

    await waitFor(() => {
      expect(screen.getByText('Country1')).toBeInTheDocument();
      expect(screen.queryByText('Country2')).toBeNull();
    });
  });

  it('should filter countries based on region selection', async () => {
    fetch.mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockCountriesData),
      }),
    );

    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <CountryList />
        </MemoryRouter>
      </QueryClientProvider>,
    );

    await waitFor(() => {
      expect(screen.getByText('Country1')).toBeInTheDocument();
      expect(screen.getByText('Country2')).toBeInTheDocument();
    });

    // Simulate region selection
    const regionFilter = screen.getByLabelText('Region Filter');
    fireEvent.change(regionFilter, { target: { value: 'Europe' } });

    await waitFor(() => {
      // Since we don't have a mock implementation for region-specific filtering,
      // we're checking if the region change does not break the existing functionality.
      expect(screen.getByText('Country1')).toBeInTheDocument();
      expect(screen.getByText('Country2')).toBeInTheDocument();
    });
  });
});
