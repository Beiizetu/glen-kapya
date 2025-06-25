"use client"

import { collection, getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"
import db from "@/lib/firebase"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Users } from "lucide-react"

interface VolunteerSubmission {
  id: string
  name: string
  email: string
  phone: string
  skills: string
  availability: string
  createdAt: string
}

export default function VolunteerSubmissions() {
  const [submissions, setSubmissions] = useState<VolunteerSubmission[]>([])

  useEffect(() => {
    const fetchSubmissions = async () => {
      const querySnapshot = await getDocs(collection(db, "volunteers"))
      const submissionsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate().toLocaleString()
      })) as VolunteerSubmission[]
      setSubmissions(submissionsData)
    }

    fetchSubmissions()
  }, [])

  return (
    <div className="p-6">
      <div className="flex items-center mb-6">
        <Users className="w-6 h-6 mr-2" />
        <h1 className="text-2xl font-bold">Volunteer Submissions</h1>
      </div>

      {submissions.length > 0 ? (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Skills</TableHead>
              <TableHead>Availability</TableHead>
              <TableHead>Submitted</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {submissions.map((submission) => (
              <TableRow key={submission.id}>
                <TableCell>{submission.name}</TableCell>
                <TableCell>{submission.email}</TableCell>
                <TableCell>{submission.phone}</TableCell>
                <TableCell>{submission.skills}</TableCell>
                <TableCell>{submission.availability}</TableCell>
                <TableCell>{submission.createdAt}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <p>No volunteer submissions found</p>
      )}
    </div>
  )
}