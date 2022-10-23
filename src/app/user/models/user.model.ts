export interface User{

userID: string;
password: string;
email: string;
role: boolean;
isActive: boolean;
isNotLocked: boolean;
authorities: [];
// reservations: List<Reservation>;
profileImageUrl: String;
lastLoginDate: Date;
lastLoginDateDisplay: Date;
joinDate: Date;
}
