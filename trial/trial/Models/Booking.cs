
//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------


namespace trial.Models
{

using System;
    using System.Collections.Generic;
    using System.Runtime.Serialization;
    [DataContract]
public partial class Booking
{

    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
    public Booking()
    {

        this.payments = new HashSet<payment>();

        this.Seats = new HashSet<Seat>();

    }

        [DataMember]
    public int booking_id { get; set; }
        [DataMember]
    public Nullable<int> user_id { get; set; }
        [DataMember]
    public Nullable<int> Guest_Id { get; set; }
        [DataMember]
    public Nullable<int> Travel_Id { get; set; }
        [DataMember]
    public Nullable<int> coach_bus_id { get; set; }
        [DataMember]
    public string booking_status { get; set; }
        [DataMember]
    public Nullable<int> bus_id { get; set; }



    public virtual Bus_Details Bus_Details { get; set; }

    public virtual Coach_bus Coach_bus { get; set; }

    public virtual Guest Guest { get; set; }

    public virtual Travel Travel { get; set; }

    public virtual Registered_User Registered_User { get; set; }

    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]

    public virtual ICollection<payment> payments { get; set; }

    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]

    public virtual ICollection<Seat> Seats { get; set; }

}

}
