import { markPageLoaded } from '@/utils/utilityFunctions'
import { useRouter } from 'next/router';
import React from 'react'

const Services = () => {
  const router = useRouter();
    markPageLoaded();
  return (
    <div>{router.query.id}</div>
  )
}

export default Services