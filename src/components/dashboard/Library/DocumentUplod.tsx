import { Cloud } from "lucide-react"



const DocumentUplod = () => {
    return (
        <section className="rounded-xl bg-white p-6 shadow-lg">
            <form>
                {/* Thumbnail Upload */}
                <div className="mb-6">
                    <label htmlFor="thumbnail" className="mb-2 block text-sm font-medium text-gray-700">
                        Thumbnail
                    </label>
                    <div className="mt-1 flex justify-center rounded-lg border-2 border-dashed border-gray-300 px-6 py-10">
                        <div className="space-y-1 text-center">
                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                                <Cloud className="h-6 w-6 text-blue-500" />
                            </div>
                            <div className="flex text-sm text-gray-600">
                                <p className="text-center">Drag & drop your image here or click choose a file</p>
                            </div>
                            <button type="button" className="mt-2 text-sm font-medium text-blue-500 hover:text-blue-600">
                                Choose a file
                            </button>
                            <input id="thumbnail" name="thumbnail" type="file" className="sr-only" />
                        </div>
                    </div>
                </div>

                <div className="mb-6 grid grid-cols-2 gap-4">
                    {/* Document Title */}
                    <div>
                        <label htmlFor="title" className="mb-2 block text-sm font-medium text-gray-700">
                            Document Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            placeholder="Write the title here..."
                            className="w-full rounded-lg border border-gray-300 p-3 text-gray-700 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                    </div>

                    {/* Link */}
                    <div>
                        <label htmlFor="link" className="mb-2 block text-sm font-medium text-gray-700">
                            Link
                        </label>
                        <input
                            type="text"
                            id="link"
                            name="link"
                            placeholder="Pest link here..."
                            className="w-full rounded-lg border border-gray-300 p-3 text-gray-700 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                    </div>
                </div>

                {/* Post Button */}
                <button
                    type="submit"
                    className="w-full rounded-lg bg-blue-500 py-3 text-center font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Post
                </button>
            </form>
        </section>
    )
}

export default DocumentUplod
