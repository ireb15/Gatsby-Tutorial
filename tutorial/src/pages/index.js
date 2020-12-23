import React from "react"
import Layout from '../components/Layout'
import {ExampleButton} from '../components/button'

export default function Home() {
  return <Layout>
    <h1 style={{color:"red",textTransform:"uppercase"}}>hello from gatsby</h1>
    <h1>hello world</h1>
    <h1>hello people</h1>
    <ExampleButton>click me</ExampleButton>
  </Layout>
}
