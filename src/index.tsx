import * as React from 'react';
import { checkFeature } from './checkFeature'
import { Feature } from './types'

interface Props {
  featureType?: Feature,
  optimistic?: boolean
}

const useWebp: (Props?: Props) => { supportsWebP: boolean } = (Props) => {

  const featureType: Feature = Props?.featureType ? Props.featureType : 'lossless'
  const optimistic: boolean = Props?.optimistic !== undefined ? Props.optimistic : true
  const [supportsWebP, setSupportsWebP] = React.useState(optimistic)

  const callback = (result:boolean) => setSupportsWebP(result)

  React.useEffect(() => {
    checkFeature(featureType, callback)
  }, [featureType])

  return {
    supportsWebP
  }
}

export default useWebp