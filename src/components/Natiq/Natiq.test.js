import * as React from 'react'
import Select from 'react-select'
import selectEvent from 'react-select-event'
import {render, screen, fireEvent, waitFor, renderHook} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'
import Natiq from './Natiq.jsx'
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {
  useMutation ,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import axiosInstance from "./axios.instance";
import App from '../../App.js'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // ✅ turns retries off
      retry: false,
    },
  },
})

// function renderWithClient(client, ui) {
//   const { rerender, ...result } = render(
//     <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>
//   )
//   return {
//     ...result,
//     rerender: (rerenderUi) =>
//       rerender(
//         <QueryClientProvider client={client}>{rerenderUi}</QueryClientProvider>
//       ),
//   }
// }

test('Natiq elements', async () => {
    render(
      <QueryClientProvider client={queryClient}>
    <Natiq />
    </QueryClientProvider>
    )
 expect(screen.getByTestId('clearTxt')).toBeInTheDocument()
 expect(screen.getByTestId('uploadTxt')).toBeInTheDocument()
 expect(screen.getByTestId('echo')).toBeInTheDocument()
 expect(screen.getByTestId('select')).toBeInTheDocument()
 expect(screen.getByTestId('selectContainer')).toBeInTheDocument()
 expect(screen.getByTestId('inputField')).toBeInTheDocument()
 expect(screen.getByTestId('counter')).toBeInTheDocument()
    })
// expect(screen.getByText(/you are on the about/i)).toBeInTheDocument()
// test('Clear Text', async () => {
//   render(
//     // <QueryClientProvider client={queryClient}>
//   <Natiq />
//   //  </QueryClientProvider>
//   )
//   await userEvent.click(screen.getByTestId('clearTxt'))
//   expect(screen.getByText(/Clear Text/i)).toBeInTheDocument()
//   })

  // test('upload Text', async () => {
  //   render(<Natiq />)
  //   // clearIco

  //   expect(screen.getByTestId('clearIco')).toBeInTheDocument()
  //   })
  // test('select options', async () => {
  //   render(<Natiq />)
  //   expect(screen.getByTestId('select')).toBeInTheDocument()
  //   expect(screen.getByTestId('0.5')).toBeInTheDocument()
  //   expect(screen.getByText(/0.5x/i)).toBeInTheDocument()
  //   expect(screen.getByText(/1x/i)).toBeInTheDocument()
  //   expect(screen.getByText(/1.5x/i)).toBeInTheDocument()
  //   expect(screen.getByText(/1.75x/i)).toBeInTheDocument()

  //   })
//   const { result } = renderHook(() => useCustomHook(), { wrapper });

//   await waitFor(() => expect(result.current.isSuccess).toBe(true));
test('echo onClick', async () => {
  const handlerMock = jest.fn()
  render( <button data-testid="echo" type="button" onClick={handlerMock} className={`  rounded rounded-circle bg-white p-4 shadow text-second `}><i className="fa-solid fa-play fa-2xl"></i> </button>)
await userEvent.click(screen.getByTestId('echo'))
expect(handlerMock).toHaveBeenCalledTimes(1)
})
test('clear text onClick', async () => {
  const handlerMock = jest.fn()
  render(<button data-testid="clearTxt" type="button" className={`btn rounded  rounded-circle bg-white `} onClick={handlerMock}> <i className={`fa-solid fa-rotate-right fa-rotate-270}`}></i>
  </button>)
  
await userEvent.click(screen.getByTestId('clearTxt'))
expect(handlerMock).toHaveBeenCalledTimes(1)
})
test('upload text onChange', async () => {
  const handlerMock = jest.fn()
  render(
   <input data-testid="uploadTxt" type="file"  onChange={handlerMock} name="image"/>
  )
 fireEvent.change(screen.getByTestId('uploadTxt'))
expect(handlerMock).toHaveBeenCalledTimes(1)
})
test('select playback rate  onChange', async () => {
  const handlerMock = jest.fn()
  render(
    <select data-testid="select" type="button" className="btn text-center rounded-pill " onChange={handlerMock} >
    <option value="0.5">0.5x</option>
    <option value="1">1x</option>
    <option value="1.5">1.5x</option>
    <option value="1.75">1.75x</option>
   </select>
  )
 fireEvent.change(screen.getByTestId('select'))
expect(handlerMock).toHaveBeenCalledTimes(1)
})


test('select playback rate  onChange value', async () => {
render(
  <select  data-testid="select" type="button" className="btn text-center rounded-pill " name="playback" >
  <option  value="0.5">0.5x</option>
  <option  value="1">1x</option>
  <option value="1.5">1.5x</option>
  <option value="1.75">1.75x</option>
 </select>

 ,
)


await userEvent.selectOptions(screen.getByTestId('select'),['0.5'])  // select value 0.5
expect(screen.getByRole('option', {name: '0.5x'}).selected).toBe(true)

await userEvent.selectOptions(screen.getByTestId('select'),['1'])  // select value 1
expect(screen.getByRole('option', {name: '1x'}).selected).toBe(true)

await userEvent.selectOptions(screen.getByTestId('select'),['1.5'])  // select value 1.5
expect(screen.getByRole('option', {name: '1.5x'}).selected).toBe(true)


await userEvent.selectOptions(screen.getByTestId('select'),['1.75'])  // select value 1.75
expect(screen.getByRole('option', {name: '1.75x'}).selected).toBe(true)



},100000)


// Create a new instance of axios-mock-adapter
// const mock = new MockAdapter(axios);
// // const mock = new MockAdapter(axiosInstance, { onNoMatch: "throwException" });
// // Mock the API endpoint for POST request
// test('should first',async () => { 
//   render(<Natiq />)
// await waitFor(()=> mock.onPost('/api/endpoint').reply(200, { message: 'Data created successfully' }));
//  })


// Test the component that makes the API POST call
// test('submits data via API POST call', async () => {
//   render(<Natiq />);
  
//   // Locate the input field for user input (replace with your actual selector)
//   const inputField = screen.getByTestId('inputField');
//   // Simulate user input
//   fireEvent.change(inputField, { target: { value: "السلام عليكم"} });

//   // Locate and click the submit button (replace with your actual selector)
//   const submitButton = screen.getByTestId('echo');
//   fireEvent.click(submitButton);

//   // Wait for the API POST call to finish (replace with an appropriate condition)
//   // await waitFor(() => {
//   //   const successMessage = screen.getByText('Data created successfully');
//   //   expect(successMessage).toBeInTheDocument();
//   // });
// });


// Mock the useMutation hook
// jest.mock('@tanstack/react-query');

// // Mock the mutate function that gets returned by useMutation
// const mutate = jest.fn();

// // Mock the useMutation hook implementation
// useMutation.mockReturnValue([mutate, {}]);

// Test the component that triggers the API POST call
// test('submits data via React Query mutation', async () => {
//   const { result } = renderHook(() => mutate())
  
//   // Locate the input field for user input (replace with your actual selector)
//   // const inputField = screen.getByTestId('inputField');
//   // // // Simulate user input
//   // fireEvent.change(inputField, { target: { value:  "السلام عليكم" } });

//   // Locate and click the submit button (replace with your actual selector)
//   // const submitButton = screen.getByTestId('echo');
//   // fireEvent.click(submitButton);

//   // Assert that the mutate function was called with the expected arguments
//   expect(mutate).toHaveBeenCalledTimes(1);
//   // await waitFor(() => expect(result.current.isSuccess).toBe(true))
//   expect(result).toBeDefined();
//   // Optionally, you can test for loading, success, or error states here
// });


// test('submits data via React Query mutation', async () => {
//   render(<Natiq />);
  
//   // Locate the input field for user input (replace with your actual selector)
//   const inputField = screen.getByTestId('inputField');
//   // Simulate user input
//   fireEvent.change(inputField, { target: { value: 'Test Data' } });

//   // Locate and click the submit button (replace with your actual selector)
//   const submitButton = screen.getByText('Submit');
//   fireEvent.click(submitButton);

//   // Assert that the mutate function was called with the expected arguments
//   expect(mutate).toHaveBeenCalledWith(
//     // Define the mutation key (usually a string or array)
//     ['mutationKey'],
//     // Define the variables to pass to the mutation
//     { data: 'Test Data' },
//     // Optional: Provide a context object if needed
//     // { context: yourContextObject }
//   );
// })
test('Clicked', async () => {
  render(     
    // <QueryClientProvider client={queryClient}>
  <Natiq />
 // </QueryClientProvider>
  )
  

  // fireEvent.click(screen.getByTestId('natiq'));
  // Locate and click the submit button (replace with your actual selector)
  const submitButton = screen.getByTestId('echo');
  fireEvent.click(submitButton);

  // Assert that the mutate function was called with the expected arguments
  // expect(mutate).toHaveBeenCalledWith(
  //   // Define the mutation key (usually a string or array)
  //   ['mutationKey'],
  //   // Define the variables to pass to the mutation
  //   { data: 'Test Data' },
  //   // Optional: Provide a context object if needed
  //   // { context: yourContextObject }
  // );
})


// Create a new instance of axios-mock-adapter
const mock = new MockAdapter(axios);

// Mock the API endpoint for POST request
mock.onPost('/api/endpoint').reply(201, { message: 'Data created successfully' });

// Test the component that makes the API POST call
test('submits data via API POST call', async () => {
  render(<Natiq />);
  
  // Locate the input field for user input (replace with your actual selector)
  const inputField = screen.getByTestId('inputField');
  // Simulate user input
  fireEvent.change(inputField, { target: { value: 'Test Data' } });

  // Locate and click the submit button (replace with your actual selector)
  const submitButton =  screen.getByTestId('echo');
  fireEvent.click(submitButton);

  // Wait for the API POST call to finish (replace with an appropriate condition)
  await waitFor(() => {
    const successMessage = screen.getByText('Data created successfully');
    expect(successMessage).toBeInTheDocument();
  });
});