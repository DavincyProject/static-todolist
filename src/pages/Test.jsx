export default function Test() {
    return (
        <>
            <div className="relative flex flex-nowrap items-stretch">
                <span
                    className="flex items-center bg-btn-default whitespace-nowrap rounded-l border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                    id="addon-wrapping"
                >📝</span>
                <input
                    type="text"
                    placeholder="Add Todo"
                    aria-label="Add Todo"
                    aria-describedby="addon-wrapping"
                    className='relative m-0 block w-[1px] min-w-0 flex-auto rounded-r border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary'
                // value={newTodo}
                // onChange={handleInputChange}
                ></input>
            </div>
        </>
    )
}
