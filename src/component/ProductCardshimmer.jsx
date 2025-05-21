const ProductCardShimmer = () => {
    return (
      <div className='relative flex flex-col gap-4 px-3 pt-3 pb-5 border-2 border-slate-200 w-72 bg-white rounded-2xl shadow-lg animate-pulse'>
        <div className='absolute top-3 right-3 w-16 h-6 rounded-full bg-blue-200'></div>
        <div className='absolute top-3 left-3 w-14 h-5 rounded-full bg-gray-300'></div>
  
        <div className='w-full h-48 flex items-center justify-center overflow-hidden rounded-xl bg-gray-100'>
          <div className='w-full h-full bg-gray-200'></div>
        </div>
  
        <div className='h-5 bg-gray-300 rounded w-3/4 mt-2'></div>
        <div className='h-4 bg-gray-200 rounded w-full'></div>
        <div className='h-4 bg-gray-200 rounded w-5/6'></div>
      </div>
    );
  };
  
  export default ProductCardShimmer;
  
  
  
  
  
  
  